class Renderer {
    constructor(){
        this.citiesTemplate = Handlebars.compile($("#cities-template").html())
        this.mainCityTemplate = Handlebars.compile($("#mainCity-template").html())
    }
    renderMainCity(mainCity) {
        const newHTML = this.mainCityTemplate(mainCity);
        $('#mainCity').empty().append(newHTML);
    }
    renderData(cities) {
        const newHTML = this.citiesTemplate({city: cities});
        $('#results').empty().append(newHTML);
    }
}