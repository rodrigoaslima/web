import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Ladding from './pages/Ladding'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={ Ladding } />
            <Route path="/study" component={ TeacherList } />
            <Route path="/give-classes" component={ TeacherForm } />
        </BrowserRouter>
    )
}

export default Routes