# Active Tab in Browser using JavaScript (not Library)

- Một tip hay với Web APIs mà không phải ai cũng biết, cụ thể là thằng `requestAnimationFrame`.
- Ngoài công năng chính là đăng ký một callback trước thời điểm browser `repaint` lại thì còn một thủ thuật nữa có thể sử dụng trong một số use cases đặc biệt giả sử như sau:
  - `Case 1`: Giả sử vì một lý do nào đó, web app của bạn phải call api liên tục trong một khoảng thời gian (có thể vì BackEnd không support realtime nhưng vẫn muốn tính năng này, bắt buộc phải xử lí ở FrontEnd). Thay vì sử dụng `interval` sẽ không tối ưu tại những thời điểm Website của chúng ta không nằm trong `active tab` của `browser`. Có thể dùng `requestAnimationFrame` để thay thế tối ưu hơn.
  - `Case 2`: Một trường hợp nữa cũng hay gặp trong các ứng dụng `Share Link`. Tính thời gian quảng cáo x giây khi User đang xem tab. Chuyển tab khác sẽ ngừng đếm.
