import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { push } from 'redux-first-history'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createReduxHistoryContext } from 'redux-first-history'
import { createBrowserHistory } from 'history'
// import logger from 'redux-logger'

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() })

let store

function configStore (preloadedState?) {
  store = configureStore({
    reducer: combineReducers({ router: routerReducer }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(routerMiddleware) as any,
    preloadedState,
    devTools: process.env.REACT_APP_ENVIRONMENT !== 'production',
  })
  return store
}

const getHistory = () => createReduxHistory(store)

const LocationLog = (props) => {
  // @ts-expect-error
  const router = useSelector((state) => state.router)
  const { location } = router
  return (
    <h4>
      {props.title}
      {' -> '}
      {JSON.stringify(props.location || location)}
    </h4>
  )
}

const Dashboard = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  return (
    <div className="h-full p-8 flex justify-center items-center flex-col">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Dashboard
      </h1>
      <div className="p-8 border border-green-400 border-solid">
        <LocationLog />
        <div className="flex justify-around my-8">
          <button
            className="font-mono text-xs"
            onClick={() => dispatch(push('/'))}
          >
            dispatch(push(`/`)) from everywhere
          </button>
          <button
            className="font-mono text-xs"
            onClick={() => dispatch(push('/dashboard'))}
          >
            dispatch(push(`/dashboard`)) from everywhere
          </button>
          <button
            className="font-mono text-xs"
            onClick={() => dispatch(push('/dashboard/new'))}
          >
            dispatch(push(`/dashboard/new`)) from everywhere
          </button>
        </div>
        <div className="flex justify-around my-8">
          <Link className="font-mono" to="/">
            ReactRouter Link to Home
          </Link>
          <Link className="font-mono" to="/dashboard">
            ReactRouter Link to Dashboard
          </Link>
          <Link className="font-mono" to="/dashboard/new">
            ReactRouter Link to New Dashboard
          </Link>
        </div>
        <p className="font-sans text-lg font-bold">DashBoard Content !!</p>
        {location && (
          <LocationLog location={location} title="route.props.location" />
        )}
      </div>
    </div>
  )
}

const Home = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  return (
    <div className="h-full p-8 flex justify-center items-center flex-col">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Home
      </h1>
      <div className="p-8 border border-blue-400 border-solid">
        <LocationLog />
        <div className="flex justify-around my-8">
          <button
            className="font-mono text-xs"
            onClick={() => dispatch(push('/'))}
          >
            dispatch(push(`/`)) from everywhere
          </button>
          <button
            className="font-mono text-xs"
            onClick={() => dispatch(push('/dashboard'))}
          >
            dispatch(push(`/dashboard`)) from everywhere
          </button>
          <button
            className="font-mono text-xs"
            onClick={() => dispatch(push('/dashboard/new'))}
          >
            dispatch(push(`/dashboard/new`)) from everywhere
          </button>
        </div>
        <div className="flex justify-around my-8">
          <Link className="font-mono" to="/">
            ReactRouter Link to Home
          </Link>
          <Link className="font-mono" to="/dashboard">
            ReactRouter Link to Dashboard
          </Link>
          <Link className="font-mono" to="/dashboard/new">
            ReactRouter Link to New Dashboard
          </Link>
        </div>
        <p className="font-sans text-lg font-bold">HomePage Content !!</p>
        {location && (
          <LocationLog location={location} title="route.props.location" />
        )}
      </div>
    </div>
  )
}

const NewDashboard = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  return (
    <div className="h-full p-8 flex justify-center items-center flex-col">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        New Dashboard
      </h1>
      <div className="p-8 border border-green-800 border-solid">
        <LocationLog />
        <div className="flex justify-around my-8">
          <button
            className="font-mono text-xs"
            onClick={() => dispatch(push('/'))}
          >
            dispatch(push(`/`)) from everywhere
          </button>
          <button
            className="font-mono text-xs"
            onClick={() => dispatch(push('/dashboard'))}
          >
            dispatch(push(`/dashboard`)) from everywhere
          </button>
          <button
            className="font-mono text-xs"
            onClick={() => dispatch(push('/dashboard/new'))}
          >
            dispatch(push(`/dashboard/new`)) from everywhere
          </button>
        </div>
        <div className="flex justify-around my-8">
          <Link className="font-mono" to="/">
            ReactRouter Link to Home
          </Link>
          <Link className="font-mono" to="/dashboard">
            ReactRouter Link to Dashboard
          </Link>
          <Link className="font-mono" to="/dashboard/new">
            ReactRouter Link to New Dashboard
          </Link>
        </div>
        <p className="font-sans text-lg font-bold">New DashBoard Content !!</p>
        {location && (
          <LocationLog location={location} title="route.props.location" />
        )}
      </div>
    </div>
  )
}

function App () {
  return (
    <Provider store={configStore()}>
      <Router history={getHistory()}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/new" element={<NewDashboard />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
