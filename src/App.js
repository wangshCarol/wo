import React from 'react';
import './App.css'; // 导入CSS文件
import HomePage from './HomePage';
import './HomePage.css'; // 导入homepage.css

function App() {
  return (
    <div className="App">
      {/* 头部 */}
      <header>
        <h1>CSSA官网</h1>
        <nav>
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">新闻</a></li>
            <li><a href="#">活动</a></li>
            {/* 添加更多导航链接 */}
          </ul>
        </nav>
      </header>

      {/* 主要内容 */}
      <main>
        <section className="welcome-section">
          <h2>欢迎来到CSSA官网</h2>
          <p>中国学生学者联合会（CSSA）是一个致力于促进中国留学生在海外的交流和合作的组织。</p>
          {/* 添加更多欢迎内容 */}
        </section>

        <section className="news-section">
          <h2>最新新闻</h2>
          {/* 显示最新新闻列表 */}
        </section>

        <section className="events-section">
          <h2>即将举行的活动</h2>
          {/* 显示即将举行的活动列表 */}
        </section>
      </main>

      {/* 底部 */}
      <footer>
        <p>&copy; 2023 CSSA. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
