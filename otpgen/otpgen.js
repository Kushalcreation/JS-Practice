function otpgen(nums) {
  otp = "";

  for (let i = 0; i < nums; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

console.log(otpgen(5));
