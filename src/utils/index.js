import axios from "axios";

const current = () => (
    axios
        .get('https://api.weatherapi.com/v1/forecast.json?key=3f1ad206d1b94436825173623201101&q=paris')
        .then(res => (
                console.log(res.data.current.condition.text)
            )
        )
        .catch(err => {
            console.log(err);
        })
);

export default current;