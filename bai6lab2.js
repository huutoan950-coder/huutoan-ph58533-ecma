const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

const config = {
  // key: `api_${env}_${version}`
  [`api_${env}_${version}`]: `https://api.example.com/${env}/${version}`,

  // key cho từng feature: `feature_${featureName}`
  // (Chúng ta có thể lặp qua mảng, nhưng để đơn giản, ta làm thủ công)
  [`feature_${features[0]}`]: true, // feature_auth
  [`feature_${features[1]}`]: true, // feature_payment
  [`feature_${features[2]}`]: false, // feature_notification

  // method: `get${env}Config()`
  // Lưu ý: tên phương thức sẽ là 'getproductionConfig'
  [`get${env}Config`]() {
    return {
      apiUrl: this[`api_${env}_${version}`],
      authEnabled: this.feature_auth,
    };
  },
};

// Kiểm tra:
console.log(config);
/*
Kết quả (có thể) là:
{
  api_production_v2: 'https://api.example.com/production/v2',
  feature_auth: true,
  feature_payment: true,
  feature_notification: false,
  getproductionConfig: [Function: getproductionConfig]
}
*/
console.log(config.getproductionConfig());
/*
Kết quả:
{
  apiUrl: 'https://api.example.com/production/v2',
  authEnabled: true
}
*/
