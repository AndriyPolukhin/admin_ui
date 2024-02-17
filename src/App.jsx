import { useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import { Route, Routes } from 'react-router-dom'
import TopBar from './scenes/global/TopBar'
import SideBar from './scenes/global/SideBar'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Invoices from './scenes/invoices'
import Contacts from './scenes/contacts'
import Form from './scenes/form'
import Bar from './scenes/bar'
import Line from './scenes/line'
import Pie from './scenes/pie'
import FAQ from './scenes/faq'
import Geography from './scenes/geography'
import Calendar from './scenes/calendar'

const App = () => {
	const [theme, colorMode] = useMode()
	const [isSidebar, setIsSidebar] = useState(true)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<SideBar isSidebar={isSidebar} />
					<main className='content'>
						<TopBar setIsSidebar={setIsSidebar} />
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/team' element={<Team />} />
							<Route path='/contacts' elmeent={<Contacts />} />
							<Route path='/invoices' element={<Invoices />} />
							<Route path='/form' element={<Form />} />
							<Route path='/bar' element={<Bar />} />
							<Route path='/pie' element={<Pie />} />
							<Route path='/line' element={<Line />} />
							<Route path='/faq' element={<FAQ />} />
							<Route path='/calendar' element={<Calendar />} />
							<Route path='/geography' element={<Geography />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App