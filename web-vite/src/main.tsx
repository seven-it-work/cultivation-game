import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ConfigProvider locale={zhCN}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ConfigProvider>
  </React.StrictMode>,
)
