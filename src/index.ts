import {app} from './app'
import {constants} from './constants'

app.listen(constants.PORT, ()=> {
    console.log(`Server is running at http://localhost:${constants.PORT}`)
})