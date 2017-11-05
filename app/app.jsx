class App extends React.Component {

    constructor() {
        super();
        this.state = { countries: [] };
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/name/united', {
            method: 'GET',
        })
            .then(results => results.json())
            .then(data => this.setState({ countries: data }))
            .catch(function(error) {console.log(error)});
    }

    _renderCountries(country, index) {
        return <li key={index}>{country.name} - {country.subregion}</li>
    }

    render() {
        const { countries } = this.state;

        return (
            <div>
                <h1>LIST OF COUNTRIES:</h1>
                <ul>
                    {
                        countries ?
                            countries.map(this._renderCountries)
                            :
                            "no data to display"
                    }
                </ul>
            </div>
        );
    }
}