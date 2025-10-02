
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AccommodationPage from '../pages/AccommodationPage'
import BookingPage from '../pages/BookingPage'
import ReviewsPage from '../pages/ReviewsPage'
import ReviewsubmitPage from '../pages/ReviewsubmitPage'
import ActivitiesPage from '../pages/ActivitiesPage'
import ContactPage from '../pages/ContactPage'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import ProfileForm from '../components/ProfileForm'

export default function AppRoutes() {

    return (
        
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/profile' element={<ProfileForm/>}/>
            <Route path='/accommodation' element={<AccommodationPage/>}/>
            <Route path='/booking' element={<BookingPage/>}/>
            <Route path='/reviews' element={<ReviewsPage/>}/>
            <Route path='/reviewsubmit' element={<ReviewsubmitPage/>}/>
            <Route path='/activities' element={<ActivitiesPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
            )
}