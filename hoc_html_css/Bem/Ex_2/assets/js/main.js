function showSuccessToast() {
  toast({
    title: "Thành công!",
    message: "Bạn đã đăng ký thành công!",
    type: "success",
    duration: 3000,
  });
}
function showErrorToast() {
  toast({
    title: "Thất bại!",
    message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
    type: "error",
    duration: 3000,
  });
}
