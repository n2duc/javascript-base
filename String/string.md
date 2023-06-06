# String

- _toUpperCase()_ -> biến chuỗi thành IN HOA
- _toLowerCase()_ -> biến chuỗi thành in thường
- _includes(value)_ -> kiểm tra chuỗi có chứa value hay không -> Boolean
- _indexOf(value)_ -> trả ra vị trí index của value tìm thấy đầu tiên trong chuỗi, nếu ko tìm thấy sẽ trả ra -1
- _lastIndexOf(value)_ -> tương tự indexOf nhưng nó sẽ lấy value tìm thấy cuối cùng trong chuỗi
- _repeat(count)_ -> lặp lại số lần chuỗi
- _replace(value1, value2)_ -> thay thế chuỗi từ value1 biến thành value2
- _replaceAll(value1, value2)_ -> tương tự replace nhưng là thay thế hết thay vì chỉ 1 value như replace
- _slice(start, end)_ -> dùng để sao chép chuỗi, nó sẽ lấy từ vị trí start tới end-1
- _split(value)_ -> tách chuỗi thành mảng chứa các chuỗi nhỏ theo value truyền vào
- _join(value)_ -> dùng để biến mảng thành chuỗi dựa vào value truyền vào, ngược lại với split
- _reverse()_ -> đảo ngược mảng

- _startsWith(value)_ -> kiểm tra chuỗi có bắt đầu với value không ? -> Boolean
- _endsWith(value)_ -> kiểm tra chuỗi có kết thúc với value không ? -> Boolean
- _concat(value)_ -> để nối chuỗi
- _trim()_ -> loại bỏ khoảng trắng đầu cuối của chuỗi
- _trimStart()_ -> loại bỏ khoảng trắng đầu chuỗi
- _trimEnd()_ -> loại bỏ khoảng trắng cuối chuỗi
- _substring(start, end)_ -> tương tự slice
- _toString()_ -> convert giá trị thành chuỗi