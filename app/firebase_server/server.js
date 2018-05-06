
import firebase from 'firebase';


export const _getData = () => {
        const rootRef = firebase.database().ref('data');
        return rootRef.once('value')
            .then((response) => response.val())
            .then((data) => {
                this.setState({copy: data.copy})

            })

    }




// const x = 'x'

// export default x


