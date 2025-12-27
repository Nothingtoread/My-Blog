// Dữ liệu bài viết về JavaScript
export const blogPosts = [
  {
    id: 1,
    title: "Giới thiệu về JavaScript ES6 và các tính năng mới",
    excerpt: "ES6 (ECMAScript 2015) đã mang đến nhiều tính năng mạnh mẽ như arrow functions, destructuring, template literals và nhiều hơn nữa...",
    content: `
      <h2>Giới thiệu về JavaScript ES6</h2>
      <p>ES6 (ECMAScript 2015) là một bước ngoặt lớn trong lịch sử phát triển của JavaScript. Nó đã mang đến nhiều tính năng mới giúp viết code dễ dàng và hiệu quả hơn.</p>
      
      <h3>1. Arrow Functions</h3>
      <p>Arrow functions cung cấp cú pháp ngắn gọn hơn cho việc viết hàm:</p>
      <pre><code>// Cách cũ
const add = function(a, b) {
  return a + b;
};

// ES6
const add = (a, b) => a + b;</code></pre>
      
      <h3>2. Destructuring</h3>
      <p>Destructuring cho phép bạn trích xuất dữ liệu từ arrays hoặc objects một cách dễ dàng:</p>
      <pre><code>const person = { name: 'John', age: 30 };
const { name, age } = person;

const numbers = [1, 2, 3];
const [first, second] = numbers;</code></pre>
      
      <h3>3. Template Literals</h3>
      <p>Template literals cho phép bạn tạo chuỗi với biến một cách dễ dàng:</p>
      <pre><code>const name = 'John';
const message = \`Xin chào, tôi là \${name}\`;</code></pre>
      
      <h3>4. Let và Const</h3>
      <p>ES6 giới thiệu <code>let</code> và <code>const</code> để thay thế <code>var</code>, giúp quản lý scope tốt hơn:</p>
      <pre><code>let x = 10; // Có thể thay đổi
const y = 20; // Không thể thay đổi</code></pre>
      
      <h3>5. Classes</h3>
      <p>ES6 đã thêm cú pháp class để làm việc với OOP dễ dàng hơn:</p>
      <pre><code>class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return \`Xin chào, tôi là \${this.name}\`;
  }
}</code></pre>
      
      <p>ES6 đã cách mạng hóa cách chúng ta viết JavaScript, làm cho code trở nên sạch sẽ và dễ đọc hơn nhiều.</p>
    `,
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c8db35?w=800&h=400&fit=crop",
    date: "2024-01-15",
    category: "JavaScript"
  },
  {
    id: 2,
    title: "Async/Await trong JavaScript: Cách xử lý bất đồng bộ hiện đại",
    excerpt: "Async/await là cách hiện đại để xử lý các thao tác bất đồng bộ trong JavaScript, giúp code dễ đọc và dễ debug hơn...",
    content: `
      <h2>Async/Await trong JavaScript</h2>
      <p>Async/await là một tính năng mạnh mẽ được giới thiệu trong ES2017, giúp viết code bất đồng bộ một cách đồng bộ và dễ đọc hơn.</p>
      
      <h3>Vấn đề với Promises</h3>
      <p>Trước khi có async/await, chúng ta phải sử dụng Promises với .then() và .catch():</p>
      <pre><code>fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });</code></pre>
      
      <h3>Giải pháp với Async/Await</h3>
      <p>Với async/await, code trở nên dễ đọc hơn nhiều:</p>
      <pre><code>async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}</code></pre>
      
      <h3>Xử lý nhiều Promise song song</h3>
      <p>Bạn có thể chạy nhiều Promise song song với Promise.all():</p>
      <pre><code>async function fetchMultipleData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu:', error);
  }
}</code></pre>
      
      <h3>Lợi ích của Async/Await</h3>
      <ul>
        <li>Code dễ đọc và dễ hiểu hơn</li>
        <li>Xử lý lỗi đơn giản hơn với try/catch</li>
        <li>Debugging dễ dàng hơn</li>
        <li>Hỗ trợ tốt hơn cho các vòng lặp bất đồng bộ</li>
      </ul>
      
      <p>Async/await đã trở thành tiêu chuẩn cho việc xử lý bất đồng bộ trong JavaScript hiện đại.</p>
    `,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    date: "2024-01-20",
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Closures trong JavaScript: Hiểu rõ và áp dụng",
    excerpt: "Closures là một khái niệm quan trọng trong JavaScript giúp bạn hiểu cách hàm hoạt động và cách quản lý scope...",
    content: `
      <h2>Closures trong JavaScript</h2>
      <p>Closure là một trong những khái niệm quan trọng nhất trong JavaScript. Nó cho phép một hàm truy cập các biến từ scope bên ngoài ngay cả sau khi hàm bên ngoài đã kết thúc.</p>
      
      <h3>Định nghĩa Closure</h3>
      <p>Closure là sự kết hợp của một hàm và môi trường lexical mà hàm đó được khai báo. Môi trường này bao gồm tất cả các biến cục bộ có sẵn tại thời điểm closure được tạo.</p>
      
      <h3>Ví dụ cơ bản</h3>
      <pre><code>function outerFunction(x) {
  // Biến cục bộ của outerFunction
  const outerVariable = x;
  
  // Hàm bên trong (inner function)
  function innerFunction(y) {
    console.log(outerVariable + y);
  }
  
  return innerFunction;
}

const addFive = outerFunction(5);
addFive(10); // Output: 15</code></pre>
      
      <h3>Ứng dụng thực tế</h3>
      <p>Closures thường được sử dụng để tạo các hàm factory và module pattern:</p>
      <pre><code>// Tạo hàm factory
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2</code></pre>
      
      <h3>Closures trong vòng lặp</h3>
      <p>Một lỗi phổ biến khi làm việc với closures trong vòng lặp:</p>
      <pre><code>// Vấn đề
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Output: 3, 3, 3
  }, 1000);
}

// Giải pháp với let
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Output: 0, 1, 2
  }, 1000);
}</code></pre>
      
      <h3>Lợi ích của Closures</h3>
      <ul>
        <li>Data privacy và encapsulation</li>
        <li>Tạo hàm factory</li>
        <li>Currying và partial application</li>
        <li>Event handlers và callbacks</li>
      </ul>
      
      <p>Hiểu rõ closures sẽ giúp bạn viết code JavaScript tốt hơn và tránh được nhiều lỗi phổ biến.</p>
    `,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    date: "2024-01-25",
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Array Methods trong JavaScript: Map, Filter, Reduce",
    excerpt: "Tìm hiểu về các phương thức mảng mạnh mẽ trong JavaScript như map, filter, reduce và cách sử dụng chúng hiệu quả...",
    content: `
      <h2>Array Methods trong JavaScript</h2>
      <p>JavaScript cung cấp nhiều phương thức mảng mạnh mẽ giúp thao tác với dữ liệu một cách dễ dàng và hiệu quả.</p>
      
      <h3>1. Map - Biến đổi mảng</h3>
      <p>Map tạo một mảng mới với kết quả của việc gọi hàm cho mỗi phần tử:</p>
      <pre><code>const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
];
const names = users.map(user => user.name);
// ['John', 'Jane']</code></pre>
      
      <h3>2. Filter - Lọc mảng</h3>
      <p>Filter tạo một mảng mới với các phần tử thỏa mãn điều kiện:</p>
      <pre><code>const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]

const adults = users.filter(user => user.age >= 18);
// Chỉ những user có age >= 18</code></pre>
      
      <h3>3. Reduce - Tổng hợp mảng</h3>
      <p>Reduce thực thi một hàm reducer cho mỗi phần tử, trả về một giá trị duy nhất:</p>
      <pre><code>const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

const grouped = users.reduce((acc, user) => {
  const ageGroup = user.age >= 30 ? 'adult' : 'young';
  if (!acc[ageGroup]) acc[ageGroup] = [];
  acc[ageGroup].push(user);
  return acc;
}, {});</code></pre>
      
      <h3>4. Kết hợp các phương thức</h3>
      <p>Bạn có thể kết hợp các phương thức để tạo pipeline xử lý dữ liệu:</p>
      <pre><code>const result = numbers
  .filter(n => n % 2 === 0)  // Lọc số chẵn
  .map(n => n * 2)            // Nhân đôi
  .reduce((acc, n) => acc + n, 0); // Tổng hợp
// Kết quả: 24 (2*2 + 4*2 + 6*2)</code></pre>
      
      <h3>5. Các phương thức khác</h3>
      <ul>
        <li><strong>find()</strong>: Tìm phần tử đầu tiên thỏa mãn điều kiện</li>
        <li><strong>some()</strong>: Kiểm tra xem có ít nhất một phần tử thỏa mãn</li>
        <li><strong>every()</strong>: Kiểm tra xem tất cả phần tử có thỏa mãn</li>
        <li><strong>forEach()</strong>: Thực thi hàm cho mỗi phần tử</li>
      </ul>
      
      <p>Nắm vững các phương thức mảng này sẽ giúp bạn viết code JavaScript sạch sẽ và hiệu quả hơn.</p>
    `,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    date: "2024-02-01",
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Promises trong JavaScript: Từ cơ bản đến nâng cao",
    excerpt: "Promises là cách hiện đại để xử lý các thao tác bất đồng bộ trong JavaScript. Tìm hiểu cách sử dụng chúng hiệu quả...",
    content: `
      <h2>Promises trong JavaScript</h2>
      <p>Promise là một đối tượng đại diện cho giá trị có thể chưa có sẵn ngay bây giờ nhưng sẽ có trong tương lai. Nó giúp xử lý các thao tác bất đồng bộ một cách dễ dàng hơn.</p>
      
      <h3>Cấu trúc cơ bản của Promise</h3>
      <pre><code>const promise = new Promise((resolve, reject) => {
  // Thực hiện một thao tác bất đồng bộ
  if (/* thành công */) {
    resolve(value);
  } else {
    reject(error);
  }
});

promise
  .then(value => {
    // Xử lý khi thành công
  })
  .catch(error => {
    // Xử lý khi có lỗi
  });</code></pre>
      
      <h3>Ví dụ thực tế</h3>
      <pre><code>function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({ id: userId, name: 'John Doe' });
      } else {
        reject(new Error('User ID không hợp lệ'));
      }
    }, 1000);
  });
}

fetchUserData(123)
  .then(user => {
    console.log('User:', user);
  })
  .catch(error => {
    console.error('Lỗi:', error);
  });</code></pre>
      
      <h3>Promise.all() - Chạy song song</h3>
      <p>Chạy nhiều Promise song song và đợi tất cả hoàn thành:</p>
      <pre><code>const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then(responses => {
    // Tất cả đã hoàn thành
    return Promise.all(responses.map(r => r.json()));
  })
  .then(data => {
    console.log('Tất cả dữ liệu:', data);
  })
  .catch(error => {
    // Nếu bất kỳ Promise nào thất bại
    console.error('Lỗi:', error);
  });</code></pre>
      
      <h3>Promise.race() - Lấy kết quả đầu tiên</h3>
      <p>Trả về Promise đầu tiên hoàn thành (thành công hoặc thất bại):</p>
      <pre><code>const promise1 = new Promise(resolve => setTimeout(() => resolve('Nhanh'), 100));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Chậm'), 500));

Promise.race([promise1, promise2])
  .then(result => {
    console.log(result); // 'Nhanh'
  });</code></pre>
      
      <h3>Promise.allSettled() - Đợi tất cả hoàn thành</h3>
      <p>Đợi tất cả Promise hoàn thành, bất kể thành công hay thất bại:</p>
      <pre><code>Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index} thành công:\`, result.value);
      } else {
        console.log(\`Promise \${index} thất bại:\`, result.reason);
      }
    });
  });</code></pre>
      
      <h3>Chuyển đổi Callback sang Promise</h3>
      <pre><code>function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}</code></pre>
      
      <p>Promises là nền tảng cho async/await và là công cụ quan trọng trong JavaScript hiện đại.</p>
    `,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    date: "2024-02-05",
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Destructuring trong JavaScript: Phá vỡ cấu trúc dữ liệu",
    excerpt: "Destructuring là một tính năng mạnh mẽ của ES6 cho phép bạn trích xuất dữ liệu từ arrays và objects một cách dễ dàng...",
    content: `
      <h2>Destructuring trong JavaScript</h2>
      <p>Destructuring là một cú pháp cho phép bạn "phá vỡ" cấu trúc của arrays và objects để trích xuất các giá trị một cách dễ dàng.</p>
      
      <h3>Destructuring Objects</h3>
      <pre><code>const person = {
  name: 'John',
  age: 30,
  city: 'Hanoi'
};

// Cách cũ
const name = person.name;
const age = person.age;

// Destructuring
const { name, age } = person;
console.log(name); // 'John'
console.log(age);  // 30

// Đổi tên biến
const { name: fullName, age: years } = person;

// Giá trị mặc định
const { name, age, country = 'Vietnam' } = person;</code></pre>
      
      <h3>Destructuring Arrays</h3>
      <pre><code>const numbers = [1, 2, 3, 4, 5];

// Lấy phần tử đầu tiên
const [first] = numbers;

// Lấy nhiều phần tử
const [first, second, third] = numbers;

// Bỏ qua phần tử
const [first, , third] = numbers; // Bỏ qua phần tử thứ 2

// Rest operator
const [first, ...rest] = numbers;
// first = 1, rest = [2, 3, 4, 5]</code></pre>
      
      <h3>Destructuring trong Function Parameters</h3>
      <pre><code>// Với objects
function greet({ name, age }) {
  return \`Xin chào, tôi là \${name}, \${age} tuổi\`;
}

greet({ name: 'John', age: 30 });

// Với arrays
function getFirstAndLast([first, ...rest]) {
  const last = rest[rest.length - 1];
  return { first, last };
}

getFirstAndLast([1, 2, 3, 4, 5]);</code></pre>
      
      <h3>Nested Destructuring</h3>
      <pre><code>const user = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'Hanoi',
    country: 'Vietnam'
  }
};

const {
  name,
  address: { city, country }
} = user;

console.log(city); // 'Hanoi'</code></pre>
      
      <h3>Destructuring với Default Values</h3>
      <pre><code>const config = {
  apiUrl: 'https://api.example.com'
};

const {
  apiUrl,
  timeout = 5000,
  retries = 3
} = config;</code></pre>
      
      <h3>Swap Variables</h3>
      <pre><code>let a = 1;
let b = 2;

[a, b] = [b, a];
// a = 2, b = 1</code></pre>
      
      <h3>Ứng dụng thực tế</h3>
      <pre><code>// Với React props
function UserCard({ name, email, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

// Với API responses
const { data: users, status, error } = await fetchUsers();

// Với imports
import { useState, useEffect } from 'react';</code></pre>
      
      <p>Destructuring giúp code JavaScript của bạn ngắn gọn và dễ đọc hơn rất nhiều!</p>
    `,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    date: "2024-02-10",
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Higher-Order Functions trong JavaScript",
    excerpt: "Higher-order functions là những hàm nhận hàm khác làm tham số hoặc trả về một hàm. Tìm hiểu cách sử dụng chúng...",
    content: `
      <h2>Higher-Order Functions trong JavaScript</h2>
      <p>Higher-order functions là những hàm có thể nhận hàm khác làm tham số hoặc trả về một hàm. Đây là một khái niệm quan trọng trong functional programming.</p>
      
      <h3>Định nghĩa</h3>
      <p>Một hàm được gọi là higher-order function nếu:</p>
      <ul>
        <li>Nó nhận một hoặc nhiều hàm làm tham số, HOẶC</li>
        <li>Nó trả về một hàm</li>
      </ul>
      
      <h3>Ví dụ cơ bản</h3>
      <pre><code>// Hàm nhận hàm làm tham số
function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

operate(5, 3, add);      // 8
operate(5, 3, multiply); // 15</code></pre>
      
      <h3>Hàm trả về hàm</h3>
      <pre><code>function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5);  // 10
triple(5);  // 15</code></pre>
      
      <h3>Array Methods là Higher-Order Functions</h3>
      <pre><code>const numbers = [1, 2, 3, 4, 5];

// map là higher-order function
const doubled = numbers.map(n => n * 2);

// filter là higher-order function
const evens = numbers.filter(n => n % 2 === 0);

// reduce là higher-order function
const sum = numbers.reduce((acc, n) => acc + n, 0);</code></pre>
      
      <h3>Tạo Higher-Order Function của riêng bạn</h3>
      <pre><code>// Hàm tạo logger
function withLogging(fn) {
  return function(...args) {
    console.log('Calling function with args:', args);
    const result = fn(...args);
    console.log('Result:', result);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);

loggedAdd(2, 3);
// Output:
// Calling function with args: [2, 3]
// Result: 5</code></pre>
      
      <h3>Debounce Function</h3>
      <pre><code>function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const searchInput = debounce((query) => {
  console.log('Searching for:', query);
}, 300);</code></pre>
      
      <h3>Compose Functions</h3>
      <pre><code>function compose(...fns) {
  return function(value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const square = x => x * x;

const transform = compose(square, multiplyByTwo, addOne);
transform(3); // ((3 + 1) * 2)² = 64</code></pre>
      
      <h3>Currying</h3>
      <pre><code>function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

curriedAdd(1)(2)(3);  // 6
curriedAdd(1, 2)(3);  // 6
curriedAdd(1)(2, 3); // 6</code></pre>
      
      <h3>Lợi ích</h3>
      <ul>
        <li>Code tái sử dụng được</li>
        <li>Dễ test và debug</li>
        <li>Tăng tính linh hoạt</li>
        <li>Code ngắn gọn và dễ đọc</li>
      </ul>
      
      <p>Higher-order functions là nền tảng của functional programming và giúp bạn viết code JavaScript tốt hơn.</p>
    `,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    date: "2024-02-15",
    category: "JavaScript"
  },
  {
    id: 8,
    title: "Event Loop và Concurrency trong JavaScript",
    excerpt: "Tìm hiểu cách JavaScript xử lý các thao tác bất đồng bộ thông qua Event Loop và cách nó quản lý concurrency...",
    content: `
      <h2>Event Loop và Concurrency trong JavaScript</h2>
      <p>JavaScript là một ngôn ngữ single-threaded, nhưng nó có thể xử lý các thao tác bất đồng bộ thông qua Event Loop. Hiểu rõ Event Loop sẽ giúp bạn viết code hiệu quả hơn.</p>
      
      <h3>JavaScript Runtime</h3>
      <p>JavaScript runtime bao gồm:</p>
      <ul>
        <li><strong>Call Stack</strong>: Nơi các hàm được thực thi</li>
        <li><strong>Heap</strong>: Nơi lưu trữ objects</li>
        <li><strong>Callback Queue</strong>: Hàng đợi các callback</li>
        <li><strong>Event Loop</strong>: Quản lý việc chuyển callback từ queue sang stack</li>
      </ul>
      
      <h3>Cách Event Loop hoạt động</h3>
      <pre><code>console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// Output: 1, 4, 3, 2</code></pre>
      
      <h3>Call Stack</h3>
      <p>Call Stack là nơi JavaScript theo dõi các hàm đang được thực thi:</p>
      <pre><code>function first() {
  console.log('First');
  second();
}

function second() {
  console.log('Second');
  third();
}

function third() {
  console.log('Third');
}

first();
// Call stack: first -> second -> third</code></pre>
      
      <h3>Web APIs và Callback Queue</h3>
      <pre><code>console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 1000);

fetch('/api/data')
  .then(() => {
    console.log('Fetch');
  });

console.log('End');

// Output:
// Start
// End
// Fetch (khi Promise resolve)
// Timeout (sau 1 giây)</code></pre>
      
      <h3>Microtasks và Macrotasks</h3>
      <p>JavaScript có hai loại task queue:</p>
      <ul>
        <li><strong>Microtasks</strong>: Promise callbacks, queueMicrotask()</li>
        <li><strong>Macrotasks</strong>: setTimeout, setInterval, I/O operations</li>
      </ul>
      
      <pre><code>console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => {
  console.log('3');
  return Promise.resolve();
}).then(() => {
  console.log('4');
});

console.log('5');

// Output: 1, 5, 3, 4, 2
// Microtasks được ưu tiên hơn macrotasks</code></pre>
      
      <h3>Blocking Event Loop</h3>
      <pre><code>// Code này sẽ block event loop
function blockingFunction() {
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // Chờ 5 giây
  }
}

console.log('Before');
blockingFunction();
console.log('After');
// UI sẽ bị đơ trong 5 giây</code></pre>
      
      <h3>Giải pháp: Chia nhỏ công việc</h3>
      <pre><code>function processChunk(array, index = 0) {
  const chunkSize = 100;
  const end = Math.min(index + chunkSize, array.length);
  
  for (let i = index; i < end; i++) {
    // Xử lý phần tử
    processItem(array[i]);
  }
  
  if (end < array.length) {
    // Chuyển sang chunk tiếp theo
    setTimeout(() => {
      processChunk(array, end);
    }, 0);
  }
}</code></pre>
      
      <h3>Async/Await và Event Loop</h3>
      <pre><code>async function example() {
  console.log('1');
  
  await Promise.resolve();
  console.log('2');
  
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log('3');
}

example();
console.log('4');

// Output: 1, 4, 2, 3</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Tránh blocking event loop với các thao tác đồng bộ nặng</li>
        <li>Sử dụng Web Workers cho các tác vụ CPU-intensive</li>
        <li>Chia nhỏ công việc lớn thành các chunk nhỏ</li>
        <li>Hiểu rõ thứ tự thực thi của microtasks và macrotasks</li>
      </ul>
      
      <p>Hiểu rõ Event Loop sẽ giúp bạn viết code JavaScript hiệu quả và tránh các vấn đề về performance.</p>
    `,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    date: "2024-02-20",
    category: "JavaScript"
  },
  {
    id: 9,
    title: "Modules trong JavaScript: ES6 Modules và CommonJS",
    excerpt: "Tìm hiểu về hệ thống module trong JavaScript, cách sử dụng ES6 modules và sự khác biệt với CommonJS...",
    content: `
      <h2>Modules trong JavaScript</h2>
      <p>Modules giúp bạn tổ chức code thành các file riêng biệt, dễ quản lý và tái sử dụng. JavaScript có hai hệ thống module chính: ES6 Modules và CommonJS.</p>
      
      <h3>ES6 Modules (ESM)</h3>
      <p>ES6 Modules là tiêu chuẩn hiện đại cho việc import/export trong JavaScript.</p>
      
      <h4>Export</h4>
      <pre><code>// Named exports
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}

// Default export
export default function multiply(a, b) {
  return a * b;
}

// Export tất cả
export { add, multiply };</code></pre>
      
      <h4>Import</h4>
      <pre><code>// Named imports
import { add, PI } from './math.js';

// Default import
import multiply from './math.js';

// Import tất cả
import * as math from './math.js';

// Rename imports
import { add as sum } from './math.js';</code></pre>
      
      <h3>CommonJS</h3>
      <p>CommonJS là hệ thống module được sử dụng trong Node.js.</p>
      
      <pre><code>// Export
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Hoặc
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// Import
const math = require('./math.js');
const { add, subtract } = require('./math.js');</code></pre>
      
      <h3>So sánh ES6 Modules vs CommonJS</h3>
      <table>
        <tr>
          <th>Tính năng</th>
          <th>ES6 Modules</th>
          <th>CommonJS</th>
        </tr>
        <tr>
          <td>Load time</td>
          <td>Static (compile time)</td>
          <td>Dynamic (runtime)</td>
        </tr>
        <tr>
          <td>Tree shaking</td>
          <td>Hỗ trợ</td>
          <td>Không hỗ trợ</td>
        </tr>
        <tr>
          <td>Browser support</td>
          <td>Native</td>
          <td>Cần bundler</td>
        </tr>
        <tr>
          <td>Top-level await</td>
          <td>Hỗ trợ</td>
          <td>Không hỗ trợ</td>
        </tr>
      </table>
      
      <h3>Dynamic Imports</h3>
      <pre><code>// Lazy loading với dynamic import
async function loadModule() {
  const module = await import('./math.js');
  module.add(1, 2);
}

// Conditional import
if (condition) {
  const utils = await import('./utils.js');
}</code></pre>
      
      <h3>Re-exporting</h3>
      <pre><code>// Re-export từ module khác
export { add, subtract } from './math.js';
export { default } from './math.js';

// Re-export với rename
export { add as sum } from './math.js';</code></pre>
      
      <h3>Module Scope</h3>
      <pre><code>// Mỗi module có scope riêng
const privateVariable = 'private';

export function publicFunction() {
  return privateVariable;
}

// privateVariable không thể truy cập từ bên ngoài</code></pre>
      
      <h3>Circular Dependencies</h3>
      <pre><code>// fileA.js
import { funcB } from './fileB.js';
export function funcA() {
  return funcB();
}

// fileB.js
import { funcA } from './fileA.js';
export function funcB() {
  return funcA();
}

// Cần cẩn thận với circular dependencies</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Sử dụng ES6 Modules cho các dự án mới</li>
        <li>Tránh circular dependencies</li>
        <li>Sử dụng named exports thay vì default exports khi có thể</li>
        <li>Nhóm các exports liên quan lại với nhau</li>
        <li>Sử dụng dynamic imports cho code splitting</li>
      </ul>
      
      <p>Modules là cách tốt nhất để tổ chức code JavaScript và tạo ra các ứng dụng có thể mở rộng.</p>
    `,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    date: "2024-02-25",
    category: "JavaScript"
  }
];

