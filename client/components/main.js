import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Dashboard" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <Link to="/dashboard/profile/d568077d-6d16-4495-8d7c-ec00e347233c ">Go To Profile /</Link>
          <Link to="/dashboard"> Go To Root </Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
