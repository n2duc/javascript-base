- _global scope_: code nằm bên ngoài hàm(function)
- _block scope_: code nằm trong dấu {...}: `let` `const`
- _local scope_: code nằm bên trong `function`
- _initializes_: khởi tạo giá trị cho biến
- _block_: 1 vùng code nằm trong dấu {...}
- _temporal dead zone_: khu vực nơi mà biến chưa thể truy cập vào được tới khi chương trình khởi tạo giá trị cho nó
- _hoisting_: đề cập đến việc chương trình ưu tiên việc xử lý khai báo
- _var_: bị hoisting, JS gán cho nó giá trị mặc định là `undefined`
- _let_ _const_: không bị hoisting, JS không gán giá trị mặc định

# Primitive data types

- _string_: chuỗi, thường nằm trong dấu nháy đơn, đôi, backticks
- Có nhiều phương thức để xử lý chuỗi(tham khảo **MDN**), các phương thức có thể nối nhau để xử lý 1 tác vụ gì đó.
- _typeof_: dùng để kiểm tra kiểu dữ liệu của biến hoặc của giá trị
- Khi khai báo biến với `let` hoặc `var` mà không gán giá trị gì cho nó thì mặc định sẽ là `undefined`
- falsy values: false, 0, "", NaN, null, undefined
- truthy values: không phải những giá trị truthy

# Operators

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- Arithmetic Operators: + - \* / () % ++ --
- Comparison Operators: > < >= <= ==(loose equality: doesn’t compare the data types) vs ===(strict equality) -> Boolean
- Logical Operators: && || !
- Assignment Operators: = += -= \*= /=
- count++: nó sẽ gán trước và tăng giá trị sau
- ++count: nó sẽ tăng trước và gán sau

# Type coercion

- Sử dụng `Boolean(value)` hoặc `!!value` để convert value sang kiểu dữ liệu là boolean(true hoặc false)
- Khi so sánh chuỗi với số sử dụng 2 dấu =(==) thì chuỗi(string) sẽ được convert sang number(số), nếu chuỗi rỗng thì nó sẽ là 0
- đúng(truthy values) và(&&) đúng -> đúng, đúng và sai(falsy values) -> sai, sai và sai -> sai
- đúng hoặc đúng -> đúng, sai hoặc sai -> sai, đúng hoặc sai -> đúng
- Khi so sánh với NaN luôn trả ra `false`, thậm chí NaN cũng không bằng chính nó
- +"333" nó sẽ convert sang number(333)
- `_type coercion_` là tiến trình chuyển đổi giá trị từ kiểu này sang kiểu khác
- explicit: Number, Boolean, String conversion
- string(+), boolean(|| && !), number conversion(+ - \* / % > < <= >= | & ^ ~ ==)
- Khi thực hiện việc chuyển đổi (type coercion) nếu có toán tử dấu cộng(+) với vế có chuỗi(string) thì nó sẽ convert sang **string**
- Nếu có toán tử dấu(+ - \* / % > < <= >= | & ^ ~ ==) thì nó sẽ convert sang **number**
- Nếu có toán tử logical(|| && !) thì nó sẽ convert sang **boolean**
- null chỉ bằng null hoặc undefined khi sử dụng 2 dấu bằng(==)
- `NaN` thực hiện toán tử với số thì trả ra kết quả là `NaN`
- Nếu so sánh chuỗi với chuỗi thì không convert sang gì cả

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

# Number

- _Math.floor(number)_ -> làm tròn xuống
- _Math.round(number)_ -> làm tròn gần nhất
- _Math.ceil(number)_ -> làm tròn lên
- _number.toFixed(count)_ -> làm tròn theo count thập phân
- _Math.random()_ -> trả ra random từ 0 đến 1
- _Math.abs(number)_ -> giá trị truyệt đối
- _Math.pow(3, 2)_ -> căn bậc 2 của 3
- Math.PI -> trả ra số PI
- _Math.sqrt(number)_ -> căn bậc 2
- _Math.trunc(number)_ -> trả ra số nguyên của number
- _Math.sign(number)_ -> number lớn hơn 0 trả ra 1, ngược lại trả ra -1
- _Math.floor(15.7784514 \* 100)_ / 100 -> trả ra decimal 2 số nhưng ko làm tròn như toFixed

# Function

- Khi gọi function(), nếu function không có `return` thì nó sẽ trả về là `undefined`
- Tên function nên có ý nghĩa, dễ hiểu, việc đặt tên nên chuẩn như biến
- `parameters` truyền vào function khi khai báo, không bắt buộc, tùy thuộc vào yêu cầu bài toán
- `arguments` truyền vào function khi được gọi(invoke)
- function được truyền vào function khác dưới dạng parameter gọi là `callback`
- Khi gọi function(invoke) thì sẽ tạo ra `execution context`
- Khi gọi function và đã return thì `local execution context` sẽ bị xóa, nghĩa là toàn bộ local variables không còn truy cập được nữa, ngoài trừ return value
- Giá trị mặc định cho parameter trong function(age = 29)

# Array

- Mảng được đánh số từ 0(index)
- Độ dài của mảng dùng .length, chạy từ 1
- _map_ là phương thức duyệt qua các phần tử trong mảng và nó sẽ tạo ra mảng mới dựa vào điều kiện ở callback và không ảnh hưởng tới mảng gốc
- _forEach_ cũng duyệt qua các phần tử trong mảng, forEach không có return
- _sort_ dùng để sắp xếp các phần tử trong mảng theo chuẩn UTF-16, nó sẽ thay đổi luôn mảng gốc(cẩn thận khi sử dụng)
- a > b ? `1` : -1 -> 1(con số lớn hơn 0): sắp xếp tăng dần, -> -1(con số nhỏ hơn 0): sắp xếp giảm dần, 0 nó sẽ giữ nguyên
- `a - b`: sắp xếp tăng dần, `b - a` : sắp xếp giảm dần
- _push_ là phương thức dùng để thêm phần tử vào cuối mảng
- _unshift_ là phương thức dùng để thêm phần tử vào đầu mảng
- _pop_ dùng để xóa phần tử cuối, khi dùng nó mình có thể lưu giá trị bị xóa vào biến
- _shift_ dùng để xóa phần tử đầu, khi dùng nó mình có thể lưu giá trị bị xóa vào biến
- _some_ nó sẽ trả về true nếu có ít nhất 1 điều kiện đúng, ngược lại trả về false
- _every_ nó sẽ trả về true nếu tất điều kiện đều đúng, ngược lại là false
- _find_ nó sẽ trả ra phần tử thỏa mãn điều kiện nào đó, nếu không thỏa mãn nó sẽ trả ra `undefined`
- _findIndex_ nó sẽ trả ra index của phần tử nếu thỏa mãn điều kiện, ngược lại là -1
- _reverse_ đảo ngược mảng, nó ảnh hưởng tới mảng gốc
- _filter_ tạo ra mảng mới, duyệt qua các phần tử trong mảng và lọc ra những phần tử thỏa mãn điều kiện nào đó
- _includes_ kiểm tra phần tử có tồn tại trong mảng hay không ?
- _concat_ dùng để gộp mảng
- _join_ dùng để nối các phần tử trong mảng lại với nhau thông qua prefix(nếu có)
- _Array.isArray(value)_ kiểm tra value có phải là mảng hay không?
- _slice_ dùng để sao chép các phần tử trong mảng ra mảng mới mà ko thay đổi mảng gốc
- _splice_ dùng để thêm hoặc xóa phần tử trong mảng, nó thay đổi mảng gốc, nếu gán nó vào biến và thực hiện chức năng xóa thì nó sẽ trả ra mảng chứa phần tử bị xóa
- _at_ trả ra giá trị ở vị trí index trong mảng, -1 là phần tử cuối cùng
- _toString()_ convert mảng thành chuỗi
- _reduce_ gom các phần tử trong mảng lại làm 1, thường gặp khi làm tính tổng các số trong mảng, hoặc nối chuỗi
- _JSON.parse(JSON.stringify(originalList))_ dùng để sao chép một mảng phức tạp, có nhiều mảng lồng nhau
- Sao chép mảng 1 cấp thì dùng Array.from, slice() hoặc spread operator

# Loop

- _forEach_, _for...of_ khá tương tự nhau và dùng để duyệt theo chiều xuôi(trái -> phải), chứ không theo chiều ngược lại như vòng lặp for thường hay while
- _while_: kiểm tra điều kiện trước khi thực hiện
- _do...while_: thực hiện xong ít nhất 1 lần rồi mới kiểm tra điều kiện
- _for_: dùng nhiều, có thể dùng đảo ngược tùy theo yêu cầu bài toán
- _break_ khi sử dụng trong vòng lặp for thì sẽ dừng và thoát khỏi vòng lặp for ngay lập tức
- _continue_ thì nó sẽ bỏ qua giá trị tùy thuộc vào điều kiện bạn viết và tiếp tục vòng lặp
- vòng lặp for có thể lồng nhau(nested)
- vòng lặp có thể duyệt qua những thứ lặp được như mảng, chuỗi, NodeList(DOM)
- có nhiều cách giải quyết với vòng lặp for, tùy thuộc vào tư duy mỗi người, có thể luyện ở leetcode hoặc freecodecamp
- trong vòng lặp for, initialization, condition và afterthought là không bắt buộc
- nên có điều kiện dừng để tránh vòng lặp vô tận(crash máy)

# Object

- Truy xuất thuộc tính trong object thì có 2 cách dot notation(`obj.name`) hoặc square bracket notation(`obj["name"]`)
- Từ khóa `this` sử dụng trong method của object thì nó sẽ trỏ tới object đó
- Arrow function không có `this` nên lưu ý khi sử dụng
- _Object.keys(obj)_ sẽ trả ra 1 mảng chứa các properties của object đó
- _Object.values(obj)_ sẽ trả ra 1 mảng chứa các value của object đó
- _Object.entries(obj)_ sẽ trả ra 1 mảng chứa các mảng nhỏ theo key và value của object
- _Object.freeze(obj)_ sẽ đóng băng object và object đó không thể thêm sửa hay xóa
- obj.hasOwnProperty(property) kiểm tra xem object đó có chứa thuộc tính hay không -> boolean
- Để sao chép object thì có thể dùng `Object.assign({}, object)`, hoặc `{...obj}`
- Để sao chép object nhiều cấp thì dùng tương tự array là `JSON.parse(JSON.stringify(obj))`
- Truy xuất 1 thuộc tính không tồn tại trong object sẽ trả ra `undefined`(1 cấp)
- Nếu cố gắng truy xuất thuộc tính 2 cấp mà không tồn tại thì sẽ bị lỗi _TypeError_
- `?.` Optional chaining sẽ kiểm tra thuộc tính có tồn tại hay không, nếu tồn tại thì nó sẽ chạy tiếp sang phải, không tồn tại thì trả ra kết quả
- nullish coalescing `variable(value1) ?? value2`: nếu value1 là `null` hoặc `undefined` thì nó sẽ lấy value2, ngược lại nó sẽ lấy value1

# DOM

- window.innerHeight sẽ trả ra viewport height
- document.body.scrollHeight -> trả ra chiều cao của body bao gồm cả scroll
- window.scrollY -> khoảng cách khi scroll theo chiều dọc
- window.location -> 1 object chứa nhiều thông tin domain

# Events

## Input

- keydown: Hoạt động khi nhấn bàn phím xuống
- keyup: Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
- keypress: sự kiện này xảy ra khi các bạn nhấn phím
- keypress sẽ ignore các phím như delete, mũi tên, page up, page down, home, end, ctrl, alt, shift, esc
- Thứ tự ưu tiên keydown -> keypress -> keyup
- change: xảy ra khi gõ xong, nhấn Enter hoặc nhấn chuột ra ngoài 1 lần
- keydown và keypress chạy trước khi kí tự xuất hiện, còn keyup thì chạy sau khi kí tự xuất hiện
- Truy xuất giá trị trong Form -> this.elements["username"].value
- Để chặn hành vi mặc định trong `keypress` thì nên dùng `event.preventDefault`, nếu ko muốn tiếp cận code ở dưới nữa thì thêm `return;`
- `event.preventDefault` không có tác dụng với `keyup`
- input -> gõ tới đâu lấy tới đó như keyup, nhưng nó ko có event.keyCode, hoặc event.key
- focus -> khi focus vào input
- blur -> khi nhấn focus sau đó nhấn ra ngoài

## Click

- event.stopPropagation() -> dùng để chặn vấn đề nổi bọt
- event.preventDefault() -> dùng để chặn hành vi mặc định của 1 element nào đó
- click -> nhấn
- event.clientX -> trả ra tọa độ của event theo trục X
- event.clientY -> trả ra tọa độ của event theo trục Y
- event.target: nó sẽ chọn chính xác element mà mình click tới
- event.currentTarget: nó sẽ chọn phần tử mà mình click
- event.target.dataset.name -> dùng để lấy custom attribute ví dụ (data-name)

## Scroll

- debounce: là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
- scrollTop, scrollLeft, scrollTo, scroll, scrollHeight, scrollWidth, scrollIntoView

## Load

- window: load -> Chờ cả trang web load xong
- DOM: DOMContentLoaded -> Chờ cây HTML load xong
- hashchange -> khi # thay đổi mà không reload lại trang
- beforeunload -> khi user bấm nút reload thì có thể hiển thị thông báo hoặc làm 1 việc gì đó

## Form

- submit -> submit form, khi button có type là submit hoặc nhấn enter
- this.elements['password'].value -> lấy giá trị của input có name là `password` trong form khi submit

## Hover

- mouseenter -> rê chuột vào phần tử, khá giống hover trong CSS
- mouseleave -> rê chuột vào phần tử sau đó rê ra ngoài lại
- mouseover -> giống mouseenter và nó sẽ chạy khi rê chuột vào phần tử và con của phần tử đó
- mousemove -> di chuyển chuột ở element
- mousedown -> click chuột trái hoặc phải
- mouseup -> khi nhấn chuột xong nhả ra

## Touch

- touchstart
- touchend

## CSS

- transitionend
- animationstart
- animationend
- animationiteration

# Timer

- setTimeout -> thuộc về webAPIs -> chỉ chạy 1 lần sau 1 khoảng thời gian nhất định
- clearTimeout
- setInterval -> thuộc về webAPIs -> chạy nhiều lần sau 1 khoảng thời gian nhất định
- clearInterval

# Date

- `new Date().method()`
- getFullYear() -> trả ra năm hiện tại
- getMonth() -> trả ra tháng hiện tại, tháng bắt đầu từ 0(0 tương ứng tháng 1)
- getDate() -> trả ra ngày của tháng ( mùng 10 )
- getDay() -> trả ra thứ tự ngày của tuần( thứ 2 -> 1)
- getHours() -> trả ra giờ hiện tại
- getMinutes() -> trả ra phút hiện tại
- getSeconds() -> trả ra giây hiện tại
- toDateString() -> trả ra thông tin của ngày bao gồm thứ tháng ngày năm(Mon Apr 10 2023)
- toTimeString() -> trả ra giờ phút giây và múi giờ(21:23:18 GMT+0700 (Indochina Time))
- toISOString() -> trả ra kiểu ISO(2023-04-10T14:23:18.101Z)
- toLocaleDateString() -> trả ra kiểu month/day/year(4/10/2023)
- toLocaleDateString("vi-VI") -> trả ra kiểu ngày/tháng/năm của Việt Nam(4/10/2023)
- new Date(endDate) - now -> trả ra tổng số miliseconds

# Intersection observer

- Kiểm tra phần tử đã nằm trong viewport hay chưa
- threshold có giá trị từ 0 -> 1, 0 nghĩa là vừa thấy còn 1 là phải hiển thị đầy đủ mới chạy

# Asynchronous

- Không nên sử dụng callback hell để xử lý bất đồng bộ
- Khi sử dụng `new Promise` thì sẽ có 3 trạng thái là `pending` `fullfilled` `reject`
- Fullfilled -> thành công
- Pending -> đang chờ
- Rejected -> thất bại
- Sử dụng .then sau Promise để lấy dữ liệu nếu Promise trả về trạng thái fullfilled
- Sử dụng .catch để bắt lỗi nếu Promise bị rejected
- Sử dụng .finally thì nó sẽ luôn chạy vào đây dù Promise thành công hay thất bại
- Promise.all([p1,p2,p3...pn]) -> chờ tất cả Promises chạy xong và trả ra fullfilled khi tất cả Promises đều fullfilled, và trả ra rejected khi có ít nhất 1 promise bị rejected, trả ra 1 promise duy nhất
- Promise.allSettled([p1,p2,p3...]) -> trả ra 1 mảng chứa các promise là 1 object có status và value, cho dù promise đó bị reject hay là fullfilled đi chăng nữa
- Promise.race([p1,p2,p3]) -> promise nào nhanh nhất thì nó sẽ trả ra kết quả của promise đó cho dù promise rejected hay fullfilled
- Promise.resolve
- Promise.reject

# Local storage - Session storage

- Local storage nó sẽ lưu trên trình duyệt của người dùng
- Session storage cũng tương tự local storage nhưng nó sẽ bị mất khi mình đóng trình duyệt
- localStorage.setItem("key", JSON.stringify(value))
- localStorage.getItem("key")
- localStorage.removeItem("key")
