import React, {Component} from 'react'


export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            temps: "",

        }

    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Kharkov&appid=835a33da81d643d0d537e8c223a674cc")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        temps: result.main["temp"]
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }


    render() {
        const {error, temps, isLoaded} = this.state
        {
            console.log(temps)
        }
        if (error) {
            return <p>error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading</p>
        } else {
            return <p>{temps}</p>
        }
    }

}

