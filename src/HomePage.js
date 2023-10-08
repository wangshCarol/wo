import React from 'react';

function HomePage() {
  return (
    <div className="cssa-homepage">
      <header>
        <h1>CSSA 官网</h1>
      </header>
      <nav>
        <ul>
          <li>首页</li>
          <li>关于我们</li>
          <li>活动</li>
          {/* 添加更多导航项 */}
        </ul>
      </nav>
      <main>
        {/* 在这里添加主要内容 */}
      </main>
      <footer>
        {/* 在这里添加页脚内容 */}
      </footer>
    </div>
  );
}

export default HomePage;