import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ArticlesScreen from './screens/ArticlesScreen';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import PrivateRoute from './components/PrivateRoute';
import AddArticleScreen from './screens/AddArticleScreen';
import EditArticleScreen from './screens/EditArticleScreen';
import UsersScreen from './screens/UsersScreen';
import UserEditScreen from './screens/UserEditScreen';
import PagesScreen from './screens/PagesScreen';
import PageDetailsScreen from './screens/PageDetailsScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/login' element={<LoginScreen />} />

      <Route path='' element={<PrivateRoute />}>
        <Route index={true} path='/' element={<HomeScreen />} />
        <Route path='/page/:pageNumber' element={<HomeScreen />} />
        <Route path='/search/:keyword' element={<HomeScreen />} />
        <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen />} />
        <Route path='/articles' element={<ArticlesScreen />} />
        <Route path='/articles/:id' element={<ArticleDetailsScreen />} />
        <Route path='/articles/:id/edit' element={<EditArticleScreen />} />
        <Route path='/add-article' element={<AddArticleScreen />} />
        <Route path='/users' element={<UsersScreen />} />
        <Route path='/user/:id/edit' element={<UserEditScreen />} />
        <Route path='/pages' element={<PagesScreen />} />
        <Route path='/pages/:id' element={<PageDetailsScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
