import React from 'react'
import styles from './SideBar.module.css';
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../utils/AuthContext';
export const SideBar = () => {

  const location = useLocation();
  const navigate = useNavigate();


  const { isLogin, setLogin, userInfo, setUserInfo } = useContext(AuthContext);
  console.log(userInfo);

  const handleLogout = () => {
    localStorage.clear();
    setLogin(false);
    setUserInfo(null);
    navigate('/')
  }

  return (
    <div className={styles.SideBar}>
      <div className={styles.SideBarIcon}>
        <div className={styles.SideBarTopContent}>Resume Screening </div>
        <ArticleIcon sx={{ fontSize: 54, marginBottom: 2 }} />
      </div>

      <div className={styles.SideBarOptionBlock}>
        <Link to={'/Dashboard'} className={[styles.SideBarOption, location.pathname === '/Dashboard' ? styles.selectedOption : null].join(' ')}>
          <DashboardIcon sx={{ fontSize: 22 }} />
          <div>Dashboard</div>
        </Link>
        <Link to={'/History'} className={[styles.SideBarOption, location.pathname === '/History' ? styles.selectedOption : null].join(' ')}>
          <HistoryIcon sx={{ fontSize: 22 }} />
          <div>History</div>
        </Link>
        {userInfo?.role === 'admin' && <Link to={'/Admin'} className={[styles.SideBarOption, location.pathname === '/Admin' ? styles.selectedOption : null].join(' ')}>
          <AdminPanelSettingsIcon sx={{ fontSize: 22 }} />
          <div>Admin</div>
        </Link>
        }
        <div onClick={handleLogout} className={styles.SideBarOption}>
          <LogoutIcon sx={{ fontSize: 22 }} />
          <div>LogOut</div>
        </div>
      </div>
    </div>
  )
}
