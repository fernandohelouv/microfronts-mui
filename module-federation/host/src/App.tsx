import { lazy } from 'react'

const DataGridCrud = lazy(
	async () => import('remote/remote-app'),
);

function App() {
  return (
    <>
      <h1>Host App Module Federation</h1>
      <DataGridCrud/>
    </>
  )
}

export default App