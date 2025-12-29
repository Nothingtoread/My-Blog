// Dữ liệu bài viết blog
export const blogPosts = [
  {
    id: 1,
    title: "Tầm quan trọng của OOP, cánh cửa để làm quen với lập trình",
    excerpt: "Lập trình hướng đối tượng (OOP) không chỉ là một phương pháp lập trình, mà còn là cánh cửa quan trọng giúp người mới bắt đầu tiếp cận với thế giới lập trình một cách có hệ thống...",
    content: `
      <h2>Tầm quan trọng của OOP, cánh cửa để làm quen với lập trình</h2>
      
      <h3>Giới thiệu</h3>
      <p>Khi bắt đầu học lập trình, nhiều người thường gặp khó khăn trong việc tổ chức code và hiểu cách các phần khác nhau của chương trình tương tác với nhau. Lập trình hướng đối tượng (Object-Oriented Programming - OOP) không chỉ đơn thuần là một phương pháp lập trình, mà còn là một cách tư duy giúp chúng ta mô hình hóa thế giới thực vào trong code.</p>
      
      <h3>Tại sao OOP lại quan trọng cho người mới bắt đầu?</h3>
      
      <h4>1. Tư duy có cấu trúc</h4>
      <p>OOP giúp bạn phát triển khả năng tư duy có hệ thống. Thay vì viết code theo kiểu "từng bước một" (procedural), bạn học cách nhìn nhận vấn đề dưới dạng các đối tượng và mối quan hệ giữa chúng. Điều này rất quan trọng khi bạn phát triển các ứng dụng phức tạp.</p>
      
      <pre><code>// Ví dụ: Mô hình hóa một sinh viên
class Student {
  constructor(name, studentId, courses) {
    this.name = name;
    this.studentId = studentId;
    this.courses = courses;
  }
  
  enrollCourse(course) {
    this.courses.push(course);
    console.log(\`\${this.name} đã đăng ký khóa học \${course}\`);
  }
  
  getInfo() {
    return \`Sinh viên: \${this.name} (ID: \${this.studentId})\`;
  }
}

// Sử dụng
const student1 = new Student("Nguyễn Văn A", "SV001", ["Toán", "Lý"]);
student1.enrollCourse("Hóa");
console.log(student1.getInfo());</code></pre>
      
      <h4>2. Dễ dàng bảo trì và mở rộng</h4>
      <p>Khi code được tổ chức theo các class và object, việc sửa đổi và thêm tính năng trở nên dễ dàng hơn rất nhiều. Bạn biết chính xác phần nào cần sửa mà không ảnh hưởng đến toàn bộ chương trình.</p>
      
      <h4>3. Tái sử dụng code hiệu quả</h4>
      <p>Với OOP, bạn có thể tạo ra các class tổng quát và tái sử dụng chúng trong nhiều dự án khác nhau. Điều này tiết kiệm thời gian và giảm thiểu lỗi.</p>
      
      <h3>Bốn trụ cột của OOP</h3>
      
      <h4>1. Encapsulation (Đóng gói)</h4>
      <p>Encapsulation là việc gói dữ liệu (thuộc tính) và phương thức (hành vi) thao tác trên dữ liệu đó vào trong một đơn vị duy nhất là class. Điều này giúp bảo vệ dữ liệu khỏi bị truy cập trực tiếp từ bên ngoài.</p>
      
      <pre><code>class BankAccount {
  #balance; // Private field trong JavaScript modern
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// account.#balance; // Error: Private field</code></pre>
      
      <h4>2. Inheritance (Kế thừa)</h4>
      <p>Kế thừa cho phép một class mới (class con) kế thừa các thuộc tính và phương thức từ một class đã có (class cha). Điều này giúp giảm code trùng lặp và tạo ra cấu trúc phân cấp rõ ràng.</p>
      
      <pre><code>class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  introduce() {
    return \`Xin chào, tôi là \${this.name}, \${this.age} tuổi\`;
  }
}

class Employee extends Person {
  constructor(name, age, position, salary) {
    super(name, age); // Gọi constructor của class cha
    this.position = position;
    this.salary = salary;
  }
  
  introduce() {
    return \`\${super.introduce()}, làm \${this.position}\`;
  }
  
  getAnnualSalary() {
    return this.salary * 12;
  }
}

const emp = new Employee("Trần Văn B", 28, "Developer", 20000000);
console.log(emp.introduce());
console.log(\`Lương năm: \${emp.getAnnualSalary()}\`);</code></pre>
      
      <h4>3. Polymorphism (Đa hình)</h4>
      <p>Đa hình cho phép các object khác nhau có thể được xử lý thông qua cùng một interface, nhưng thực hiện theo cách riêng của chúng. Điều này tạo ra sự linh hoạt cao trong thiết kế.</p>
      
      <pre><code>class Shape {
  calculateArea() {
    throw new Error("Method must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
}

// Polymorphism trong thực tế
const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Circle(3)
];

shapes.forEach(shape => {
  console.log(\`Diện tích: \${shape.calculateArea()}\`);
});</code></pre>
      
      <h4>4. Abstraction (Trừu tượng hóa)</h4>
      <p>Abstraction là việc ẩn đi các chi tiết phức tạp và chỉ hiển thị những gì cần thiết cho người dùng. Điều này giúp giảm độ phức tạp và tăng tính dễ sử dụng.</p>
      
      <pre><code>class CoffeeMachine {
  #waterAmount = 0;
  #temperature = 0;
  
  // Public interface - đơn giản và dễ sử dụng
  makeCoffee(type) {
    this.#boilWater();
    this.#grindBeans();
    this.#brew(type);
    return "Cà phê của bạn đã sẵn sàng!";
  }
  
  // Private methods - chi tiết phức tạp được ẩn đi
  #boilWater() {
    this.#temperature = 95;
    console.log("Đang đun nước...");
  }
  
  #grindBeans() {
    console.log("Đang xay hạt cà phê...");
  }
  
  #brew(type) {
    console.log(\`Đang pha \${type}...\`);
  }
}

const machine = new CoffeeMachine();
console.log(machine.makeCoffee("Espresso"));
// Người dùng không cần biết chi tiết bên trong</code></pre>
      
      <h3>Ứng dụng thực tế của OOP</h3>
      
      <h4>1. Phát triển Game</h4>
      <p>OOP là nền tảng cho hầu hết các game hiện đại. Mỗi nhân vật, vật phẩm, địch thủ đều là các object với thuộc tính và hành vi riêng.</p>
      
      <pre><code>class Character {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }
  
  takeDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      console.log(\`\${this.name} đã bị đánh bại!\`);
    }
  }
  
  attackTarget(target) {
    console.log(\`\${this.name} tấn công \${target.name}!\`);
    target.takeDamage(this.attack);
  }
}

class Warrior extends Character {
  constructor(name, health, attack, armor) {
    super(name, health, attack);
    this.armor = armor;
  }
  
  takeDamage(damage) {
    const actualDamage = Math.max(0, damage - this.armor);
    super.takeDamage(actualDamage);
  }
}

const hero = new Warrior("Chiến binh", 100, 20, 5);
const enemy = new Character("Quái vật", 50, 15);
hero.attackTarget(enemy);</code></pre>
      
      <h4>2. Xây dựng Web Applications</h4>
      <p>Các framework như React, Angular, Vue đều sử dụng khái niệm OOP để tổ chức components và quản lý state.</p>
      
      <h4>3. Hệ thống quản lý</h4>
      <p>Các hệ thống quản lý học sinh, nhân viên, kho hàng... đều được xây dựng dựa trên OOP vì tính tự nhiên trong việc mô hình hóa thực thể.</p>
      
      <h3>Lời khuyên cho người mới bắt đầu</h3>
      
      <ol>
        <li><strong>Bắt đầu từ những ví dụ đơn giản:</strong> Đừng cố gắng học tất cả cùng một lúc. Hãy bắt đầu với việc tạo các class đơn giản như Student, Book, Car...</li>
        
        <li><strong>Thực hành thường xuyên:</strong> Hãy thử mô hình hóa các đối tượng xung quanh bạn thành code. Ví dụ: mô hình hóa điện thoại của bạn, chiếc xe, ngôi nhà...</li>
        
        <li><strong>Đọc code của người khác:</strong> Xem cách các lập trình viên khác sử dụng OOP trong các dự án open source trên GitHub.</li>
        
        <li><strong>Áp dụng vào dự án thực tế:</strong> Hãy tạo một dự án nhỏ như ứng dụng quản lý công việc, game đơn giản, hoặc hệ thống quản lý thư viện.</li>
        
        <li><strong>Đừng quá lạm dụng:</strong> OOP là công cụ mạnh mẽ nhưng không phải lúc nào cũng cần thiết. Học cách nhận biết khi nào nên dùng OOP và khi nào nên dùng cách tiếp cận khác.</li>
      </ol>
      
      <h3>Kết luận</h3>
      <p>OOP không chỉ là một kỹ thuật lập trình, mà còn là một cách tư duy giúp bạn giải quyết vấn đề một cách có hệ thống. Nó là nền tảng quan trọng cho bất kỳ lập trình viên nào muốn phát triển sự nghiệp trong ngành công nghệ phần mềm.</p>
      
      <p>Khi bạn nắm vững OOP, bạn sẽ thấy rằng việc học các ngôn ngữ lập trình mới, framework mới, hoặc giải quyết các vấn đề phức tạp trở nên dễ dàng hơn rất nhiều. OOP thực sự là cánh cửa mở ra thế giới lập trình chuyên nghiệp!</p>
    `,
    image: "/images/javascript-blog.jpg",
    date: "2024-12-15",
    category: "Programming Fundamentals"
  },
  {
    id: 2,
    title: "Javascript, lỗi thời hay yếu kém từ bản thân?",
    excerpt: "JavaScript thường bị chê là ngôn ngữ lỗi thời, yếu kém. Nhưng liệu đó có phải là sự thật, hay chỉ là do chúng ta chưa hiểu và sử dụng đúng cách...",
    content: `
      <h2>Javascript, lỗi thời hay yếu kém từ bản thân?</h2>
      
      <h3>Giới thiệu</h3>
      <p>Trong cộng đồng lập trình viên, JavaScript thường nhận được những đánh giá trái chiều. Nhiều người cho rằng nó là ngôn ngữ lỗi thời, thiết kế tồi, đầy rẫy các quirks và pitfalls. Nhưng liệu những đánh giá này có công bằng? Hay vấn đề nằm ở cách chúng ta tiếp cận và sử dụng JavaScript?</p>
      
      <h3>Những lời chỉ trích phổ biến về JavaScript</h3>
      
      <h4>1. "JavaScript có quá nhiều cách để làm một việc"</h4>
      <p>Đây là một lời chỉ trích phổ biến. Thực tế, sự linh hoạt này vừa là điểm mạnh vừa là điểm yếu của JavaScript:</p>
      
      <pre><code>// Có nhiều cách để tạo function
function traditional() { return "traditional"; }
const arrow = () => "arrow";
const functionExpression = function() { return "expression"; };

// Nhiều cách để tạo object
const obj1 = new Object();
const obj2 = {};
const obj3 = Object.create(null);</code></pre>
      
      <p><strong>Sự thật:</strong> Mỗi cách có mục đích riêng. Arrow functions không có <code>this</code> binding riêng, phù hợp cho callbacks. Traditional functions có <code>this</code> động, phù hợp cho methods. Hiểu rõ sự khác biệt này là dấu hiệu của một lập trình viên giỏi.</p>
      
      <h4>2. "Type coercion gây khó hiểu"</h4>
      <p>JavaScript có type coercion tự động, điều này đôi khi gây ra kết quả bất ngờ:</p>
      
      <pre><code>console.log("5" + 3);     // "53" - string concatenation
console.log("5" - 3);     // 2 - numeric subtraction
console.log([] + []);     // "" - empty string
console.log([] + {});     // "[object Object]"
console.log({} + []);     // 0 (trong một số trường hợp)</code></pre>
      
      <p><strong>Giải pháp:</strong> Sử dụng TypeScript hoặc strict comparison:</p>
      
      <pre><code>// Bad
if (value == "5") { }

// Good
if (value === "5") { }

// With TypeScript
function add(a: number, b: number): number {
  return a + b;
}</code></pre>
      
      <h4>3. "JavaScript chậm"</h4>
      <p>Nhiều người nghĩ JavaScript chậm so với các ngôn ngữ compiled.</p>
      
      <p><strong>Sự thật:</strong> Modern JavaScript engines như V8 (Chrome, Node.js), SpiderMonkey (Firefox) đã cực kỳ tối ưu. Với JIT compilation, JavaScript có thể đạt hiệu suất gần bằng C++ trong nhiều trường hợp.</p>
      
      <pre><code>// V8 tối ưu hóa code này rất tốt
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Benchmark: Xử lý 1 triệu phần tử chỉ mất vài ms</code></pre>
      
      <h3>Sức mạnh thực sự của JavaScript hiện đại</h3>
      
      <h4>1. Hệ sinh thái phong phú nhất</h4>
      <p>NPM có hơn 2 triệu packages - nhiều hơn bất kỳ ngôn ngữ nào khác. Bạn có thể tìm thấy library cho hầu hết mọi nhu cầu:</p>
      
      <pre><code>// Machine Learning
import * as tf from '@tensorflow/tfjs';

// Data Visualization
import { Chart } from 'chart.js';

// Backend Development
import express from 'express';

// Mobile Apps
import React from 'react-native';

// Desktop Apps
import { app } from 'electron';</code></pre>
      
      <h4>2. Async Programming xuất sắc</h4>
      <p>JavaScript được thiết kế cho async từ đầu với Event Loop, Promises, và async/await:</p>
      
      <pre><code>// Xử lý nhiều API calls song song
async function fetchUserData(userId) {
  try {
    const [user, posts, friends] = await Promise.all([
      fetch(\`/api/users/\${userId}\`).then(r => r.json()),
      fetch(\`/api/posts?userId=\${userId}\`).then(r => r.json()),
      fetch(\`/api/friends?userId=\${userId}\`).then(r => r.json())
    ]);
    
    return { user, posts, friends };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Error handling tinh tế
async function robustFetch(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}</code></pre>
      
      <h4>3. Functional Programming mạnh mẽ</h4>
      <p>JavaScript hỗ trợ functional programming rất tốt:</p>
      
      <pre><code>// Composition
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const transform = compose(square, double, addOne);
console.log(transform(3)); // ((3 + 1) * 2)² = 64

// Currying
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...nextArgs) => curried.apply(this, [...args, ...nextArgs]);
    }
  };
};

const multiply = curry((a, b, c) => a * b * c);
const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);
console.log(multiplyBy2And3(4)); // 24

// Immutability
const updateUser = (user, updates) => ({
  ...user,
  ...updates,
  updatedAt: new Date()
});

const addToCart = (cart, item) => [...cart, item];
const removeFromCart = (cart, itemId) => cart.filter(item => item.id !== itemId);</code></pre>
      
      <h4>4. Full-stack Development</h4>
      <p>JavaScript là ngôn ngữ duy nhất cho phép bạn viết cả frontend và backend với cùng một ngôn ngữ:</p>
      
      <pre><code>// Backend (Node.js + Express)
import express from 'express';
const app = express();

app.get('/api/users', async (req, res) => {
  const users = await db.users.findAll();
  res.json(users);
});

// Frontend (React)
function UserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(setUsers);
  }, []);
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Shared validation logic
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// Dùng được cả frontend lẫn backend!</code></pre>
      
      <h3>Modern JavaScript Best Practices</h3>
      
      <h4>1. Sử dụng ES6+ features</h4>
      <pre><code>// Destructuring
const { name, email } = user;
const [first, ...rest] = array;

// Template literals
const greeting = \`Hello, \${name}!\`;

// Optional chaining
const city = user?.address?.city;

// Nullish coalescing
const port = config.port ?? 3000;

// Array methods
const adultsNames = users
  .filter(u => u.age >= 18)
  .map(u => u.name)
  .sort();</code></pre>
      
      <h4>2. Type Safety với TypeScript</h4>
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

function getUserById(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then(r => r.json());
}

// Type inference
const numbers = [1, 2, 3]; // number[]
const sum = numbers.reduce((a, b) => a + b, 0); // number</code></pre>
      
      <h4>3. Error Handling đúng cách</h4>
      <pre><code>class ApplicationError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}

class ValidationError extends ApplicationError {
  constructor(message) {
    super(message, 400);
  }
}

async function createUser(data) {
  if (!data.email) {
    throw new ValidationError('Email is required');
  }
  
  try {
    return await db.users.create(data);
  } catch (error) {
    if (error.code === 'DUPLICATE_EMAIL') {
      throw new ValidationError('Email already exists');
    }
    throw new ApplicationError('Failed to create user');
  }
}</code></pre>
      
      <h4>4. Performance Optimization</h4>
      <pre><code>// Debouncing
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const searchInput = debounce((query) => {
  fetch(\`/api/search?q=\${query}\`)
    .then(r => r.json())
    .then(updateResults);
}, 300);

// Memoization
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

// Lazy loading
const HeavyComponent = lazy(() => import('./HeavyComponent'));</code></pre>
      
      <h3>Khi nào JavaScript KHÔNG phải là lựa chọn tốt?</h3>
      
      <p>Hãy thành thật: JavaScript không phải là giải pháp cho mọi vấn đề:</p>
      
      <ol>
        <li><strong>CPU-intensive tasks:</strong> Machine learning training, video encoding, scientific computing - nên dùng Python, C++, Rust</li>
        <li><strong>System programming:</strong> OS kernels, drivers - dùng C, Rust</li>
        <li><strong>Real-time systems:</strong> Trading platforms yêu cầu latency cực thấp - dùng C++, Java</li>
        <li><strong>Memory-constrained environments:</strong> Embedded systems - dùng C, Assembly</li>
      </ol>
      
      <h3>Kết luận: Vấn đề không phải ở JavaScript</h3>
      
      <p>JavaScript không phải là ngôn ngữ hoàn hảo, nhưng cũng không hề lỗi thời hay yếu kém. Những vấn đề mà nhiều người gặp phải thường xuất phát từ:</p>
      
      <ul>
        <li><strong>Thiếu hiểu biết về ngôn ngữ:</strong> Không biết về event loop, closures, prototypes...</li>
        <li><strong>Không cập nhật kiến thức:</strong> Vẫn code theo kiểu ES5 trong khi ES2015+ đã ra mắt nhiều năm</li>
        <li><strong>Không sử dụng công cụ phù hợp:</strong> Không dùng TypeScript, ESLint, Prettier...</li>
        <li><strong>Bad practices:</strong> Không handle errors, callback hell, global variables...</li>
      </ul>
      
      <p>JavaScript đang chạy trên hàng tỷ thiết bị, từ websites, servers, mobile apps, desktop apps đến IoT devices. Các công ty lớn như Google, Facebook, Netflix, Microsoft đều sử dụng JavaScript cho các sản phẩm quan trọng.</p>
      
      <p>Vậy nên, trước khi nói JavaScript lỗi thời, hãy tự hỏi: "Mình đã thực sự hiểu và sử dụng JavaScript đúng cách chưa?"</p>
      
      <p><strong>JavaScript không yếu kém - chỉ có lập trình viên yếu kém trong việc sử dụng nó!</strong></p>
    `,
    image: "/images/javascript-blog.jpg",
    date: "2024-12-20",
    category: "JavaScript"
  },
  {
    id: 3,
    title: "AI, Chìa khóa của sự hiệu quả hay là ảo tưởng của nhà tuyển dụng",
    excerpt: "AI đang thay đổi ngành công nghệ, nhưng liệu các công cụ AI có thực sự mang lại hiệu quả như nhà tuyển dụng kỳ vọng? Hay đây chỉ là một trend hype...",
    content: `
      <h2>AI, Chìa khóa của sự hiệu quả hay là ảo tưởng của nhà tuyển dụng</h2>
      
      <h3>Giới thiệu</h3>
      <p>Những năm gần đây, AI (Artificial Intelligence) đã trở thành buzzword trong ngành công nghệ. Nhiều nhà tuyển dụng yêu cầu ứng viên phải có kinh nghiệm với AI, ChatGPT, GitHub Copilot... Nhưng liệu AI có thực sự là "chìa khóa của sự hiệu quả" như nhiều người nghĩ, hay chỉ là một ảo tưởng được thổi phồng?</p>
      
      <h3>Kỳ vọng của nhà tuyển dụng vs Thực tế</h3>
      
      <h4>Kỳ vọng: "AI sẽ thay thế lập trình viên"</h4>
      <p>Nhiều nhà tuyển dụng tin rằng với AI, họ có thể thuê ít lập trình viên hơn vì AI có thể viết code.</p>
      
      <p><strong>Thực tế:</strong> AI có thể tạo code, nhưng không thể thay thế tư duy lập trình. Xem ví dụ:</p>
      
      <pre><code>// Prompt cho AI: "Tạo function tính fibonacci"
// AI output (thường thấy):
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Vấn đề: Time complexity O(2^n) - cực kỳ chậm!
// fibonacci(40) sẽ mất vài giây

// Lập trình viên giỏi sẽ biết optimize:
function fibonacci(n) {
  const memo = new Map();
  
  function fib(num) {
    if (num <= 1) return num;
    if (memo.has(num)) return memo.get(num);
    
    const result = fib(num - 1) + fib(num - 2);
    memo.set(num, result);
    return result;
  }
  
  return fib(n);
}

// Hoặc dùng iteration:
function fibonacci(n) {
  if (n <= 1) return n;
  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}
// Time complexity: O(n) - nhanh hơn exponentially!</code></pre>
      
      <h4>Kỳ vọng: "Junior developer + AI = Senior developer"</h4>
      <p>Nhiều công ty nghĩ rằng junior dev với AI có thể làm việc của senior dev.</p>
      
      <p><strong>Thực tế:</strong> AI chỉ hiệu quả khi người dùng biết đặt câu hỏi đúng và đánh giá kết quả. Điều này cần kinh nghiệm:</p>
      
      <pre><code>// Junior dev hỏi AI: "Fix this bug"
// AI có thể đưa ra giải pháp quick fix

// Senior dev hỏi AI:
// "Analyze the root cause of this race condition in our 
// asynchronous data fetching logic. Consider:
// - Event loop behavior
// - State management timing
// - Potential memory leaks
// - Edge cases in error handling"

// Kết quả: Senior dev biết hỏi đúng vấn đề, junior dev chỉ fix triệu chứng</code></pre>
      
      <h3>Khi nào AI thực sự hữu ích?</h3>
      
      <h4>1. Boilerplate Code Generation</h4>
      <p>AI xuất sắc trong việc tạo code lặp đi lặp lại:</p>
      
      <pre><code>// Tạo CRUD operations
// Prompt: "Create REST API endpoints for User model with validation"

// AI có thể tạo:
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// CREATE
router.post('/users',
  [
    body('email').isEmail(),
    body('name').notEmpty(),
    body('password').isLength({ min: 8 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// READ, UPDATE, DELETE tương tự...
// Giúp tiết kiệm 30-60 phút cho boilerplate</code></pre>
      
      <h4>2. Code Explanation và Documentation</h4>
      <p>AI rất tốt trong việc giải thích code phức tạp:</p>
      
      <pre><code>// Complex regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Hỏi AI: "Explain this regex"
// AI output: "This regex validates email addresses:
// ^ - Start of string
// [^\s@]+ - One or more characters that are not whitespace or @
// @ - Literal @ symbol
// [^\s@]+ - One or more characters that are not whitespace or @
// \. - Literal dot
// [^\s@]+ - One or more characters that are not whitespace or @
// $ - End of string"

// Rất hữu ích cho code review và onboarding!</code></pre>
      
      <h4>3. Testing và Edge Cases</h4>
      <p>AI có thể gợi ý test cases mà bạn chưa nghĩ tới:</p>
      
      <pre><code>function divide(a, b) {
  return a / b;
}

// Hỏi AI: "What edge cases should I test?"
// AI suggests:
describe('divide', () => {
  test('normal division', () => {
    expect(divide(10, 2)).toBe(5);
  });
  
  test('division by zero', () => {
    expect(divide(10, 0)).toBe(Infinity);
  });
  
  test('negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });
  
  test('floating point', () => {
    expect(divide(10, 3)).toBeCloseTo(3.333, 2);
  });
  
  test('very large numbers', () => {
    expect(divide(Number.MAX_VALUE, 2)).toBeLessThan(Infinity);
  });
  
  test('very small numbers', () => {
    expect(divide(Number.MIN_VALUE, 2)).toBeGreaterThan(0);
  });
});

// AI nghĩ ra cases mà dev có thể bỏ qua!</code></pre>
      
      <h4>4. Learning và Research</h4>
      <p>AI là giáo viên 24/7 kiên nhẫn:</p>
      
      <pre><code>// Học khái niệm mới
// "Explain closures in JavaScript with practical examples"

// "How does the event loop work in Node.js?"

// "What's the difference between Promise.all() and Promise.allSettled()?"

// AI có thể giải thích ngay lập tức với examples
// Tiết kiệm thời gian Google và đọc documentation</code></pre>
      
      <h3>Hạn chế nghiêm trọng của AI</h3>
      
      <h4>1. Không hiểu Context nghiệp vụ</h4>
      <pre><code>// Yêu cầu: "Create a payment processing function"
// AI tạo function generic:

async function processPayment(amount, cardInfo) {
  // Validate card
  if (!isValidCard(cardInfo)) {
    throw new Error('Invalid card');
  }
  
  // Process payment
  const result = await paymentGateway.charge(amount, cardInfo);
  return result;
}

// Nhưng AI KHÔNG BIẾT:
// - Có cần PCI compliance không?
// - Có cần 3D Secure không?
// - Xử lý multiple currencies thế nào?
// - Retry logic khi payment gateway down?
// - Fraud detection?
// - Tax calculation theo từng quốc gia?
// - Refund workflow?

// Đây là domain knowledge mà chỉ con người mới có!</code></pre>
      
      <h4>2. Security Vulnerabilities</h4>
      <pre><code>// AI thường tạo code không an toàn:

// Prompt: "Create login endpoint"
// AI output:
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.query(
    \`SELECT * FROM users WHERE username = '\${username}' AND password = '\${password}'\`
  );
  
  if (user) {
    res.json({ token: createToken(user) });
  }
});

// SECURITY ISSUES:
// 1. SQL Injection vulnerability!!!
// 2. Passwords stored in plain text!!!
// 3. No rate limiting
// 4. No input sanitization
// 5. Token creation might be weak

// Proper implementation:
app.post('/login', 
  rateLimit({ windowMs: 15 * 60 * 1000, max: 5 }),
  async (req, res) => {
    const { username, password } = req.body;
    
    // Input validation
    if (!username || !password) {
      return res.status(400).json({ error: 'Missing credentials' });
    }
    
    // Parameterized query (prevents SQL injection)
    const user = await db.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    
    if (!user) {
      // Don't reveal if user exists
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Compare hashed passwords
    const validPassword = await bcrypt.compare(password, user.passwordHash);
    
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Create secure JWT token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({ token });
  }
);</code></pre>
      
      <h4>3. Hallucinations và Outdated Information</h4>
      <pre><code>// AI có thể tạo ra code với APIs không tồn tại:

// Prompt: "Use latest React 18 features"
// AI có thể generate:
import { useSuperState } from 'react'; // Không tồn tại!

function Component() {
  const [state] = useSuperState(); // Fake API!
  // ...
}

// Hoặc dùng deprecated APIs:
componentWillMount() { // Deprecated in React 16.3!
  // ...
}

// Lập trình viên phải biết để kiểm tra!</code></pre>
      
      <h4>4. Performance Issues</h4>
      <pre><code>// AI thường không optimize performance

// Prompt: "Get user posts with comments"
// AI output:
async function getUserPostsWithComments(userId) {
  const posts = await db.posts.findAll({ userId });
  
  for (const post of posts) {
    post.comments = await db.comments.findAll({ postId: post.id });
  }
  
  return posts;
}

// Vấn đề: N+1 query problem!
// Với 100 posts, sẽ có 101 queries!

// Optimized version:
async function getUserPostsWithComments(userId) {
  const posts = await db.posts.findAll({
    where: { userId },
    include: [{
      model: db.comments
    }]
  });
  
  return posts;
}

// Chỉ 1 query! Senior dev sẽ nhận ra ngay.</code></pre>
      
      <h3>Cách sử dụng AI hiệu quả</h3>
      
      <h4>1. AI là trợ lý, không phải thay thế</h4>
      <pre><code>// Workflow hiệu quả:

// Bước 1: Tự thiết kế architecture
// - Database schema
// - API endpoints
// - Data flow
// - Security requirements

// Bước 2: Dùng AI cho implementation details
// - Boilerplate code
// - Helper functions
// - Test cases
// - Documentation

// Bước 3: Review và optimize AI code
// - Security
// - Performance  
// - Edge cases
// - Best practices

// Bước 4: Manual testing
// - Integration testing
// - Load testing
// - Security testing</code></pre>
      
      <h4>2. Prompt Engineering</h4>
      <pre><code>// Bad prompt:
"Create a function to sort array"

// Good prompt:
"Create a TypeScript function that sorts an array of objects by a 
specified property name. Requirements:
- Generic type support
- Handle nested properties (e.g., 'user.name')
- Support ascending/descending order
- Handle null/undefined values
- Include JSDoc documentation
- Include unit tests"

// Kết quả tốt hơn rất nhiều!</code></pre>
      
      <h4>3. Verify Everything</h4>
      <pre><code>// Checklist khi dùng AI-generated code:
const aiCodeChecklist = {
  security: [
    'SQL injection prevention?',
    'XSS prevention?',
    'CSRF protection?',
    'Input validation?',
    'Authentication/Authorization?'
  ],
  performance: [
    'Time complexity acceptable?',
    'Memory usage reasonable?',
    'Database queries optimized?',
    'Caching implemented if needed?'
  ],
  quality: [
    'Error handling complete?',
    'Edge cases covered?',
    'Code readable and maintainable?',
    'Tests included?',
    'Documentation clear?'
  ],
  correctness: [
    'Actually solves the problem?',
    'APIs exist and are current?',
    'Dependencies compatible?',
    'Works with existing codebase?'
  ]
};</code></pre>
      
      <h3>Tương lai của AI trong lập trình</h3>
      
      <h4>AI sẽ tốt hơn ở:</h4>
      <ul>
        <li>Code generation và refactoring</li>
        <li>Bug detection và fixing</li>
        <li>Test generation</li>
        <li>Documentation tự động</li>
        <li>Code review assistance</li>
      </ul>
      
      <h4>Con người vẫn cần thiết cho:</h4>
      <ul>
        <li>System design và architecture</li>
        <li>Business logic và domain knowledge</li>
        <li>Security và compliance</li>
        <li>Performance optimization</li>
        <li>User experience design</li>
        <li>Ethical decisions</li>
        <li>Innovation và creativity</li>
      </ul>
      
      <h3>Lời khuyên cho developers</h3>
      
      <ol>
        <li><strong>Học fundamentals vững:</strong> AI không thể thay thế hiểu biết cơ bản về algorithms, data structures, design patterns...</li>
        
        <li><strong>Đừng phụ thuộc hoàn toàn vào AI:</strong> Sử dụng AI như một công cụ, không phải cái nạng.</li>
        
        <li><strong>Critical thinking:</strong> Luôn đặt câu hỏi "Tại sao?" với code AI tạo ra.</li>
        
        <li><strong>Keep learning:</strong> AI tools thay đổi nhanh, hãy cập nhật liên tục.</li>
        
        <li><strong>Focus on problem-solving:</strong> AI có thể viết code, nhưng không thể định nghĩa vấn đề và tìm giải pháp tốt nhất.</li>
      </ol>
      
      <h3>Kết luận</h3>
      
      <p>AI không phải là "chìa khóa kỳ diệu" cũng không phải là "ảo tưởng hoàn toàn". Nó là một công cụ mạnh mẽ khi được sử dụng đúng cách bởi những người có kiến thức và kinh nghiệm.</p>
      
      <p>Nhà tuyển dụng cần hiểu rằng:</p>
      <ul>
        <li>AI không thể thay thế lập trình viên giỏi</li>
        <li>Junior dev + AI ≠ Senior dev</li>
        <li>AI cần được giám sát và kiểm tra kỹ lưỡng</li>
        <li>Domain knowledge và critical thinking vẫn là quan trọng nhất</li>
      </ul>
      
      <p>Developers cần hiểu rằng:</p>
      <ul>
        <li>AI là công cụ tăng năng suất, không phải thay thế</li>
        <li>Fundamentals vẫn là nền tảng quan trọng nhất</li>
        <li>Critical thinking và problem-solving là kỹ năng không thể thay thế</li>
        <li>AI làm cho lập trình viên giỏi trở nên xuất sắc hơn, nhưng không thể biến người yếu thành người giỏi</li>
      </ul>
      
      <p><strong>AI là amplifier (bộ khuếch đại), không phải replacement (sự thay thế). Nó khuếch đại khả năng của bạn - nếu bạn giỏi, bạn sẽ trở nên xuất sắc. Nếu bạn yếu, AI chỉ giúp bạn tạo ra bugs nhanh hơn!</strong></p>
    `,
    image: "/images/javascript-blog.jpg",
    date: "2024-12-25",
    category: "AI & Technology"
  }
];
