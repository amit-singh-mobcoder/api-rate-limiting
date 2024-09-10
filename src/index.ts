import {app} from './app'
import {constants} from './constants'
import {job} from './app'

app.listen(constants.PORT, ()=> {
    console.log(`Server is running at http://localhost:${constants.PORT}`)
    job.start()
})