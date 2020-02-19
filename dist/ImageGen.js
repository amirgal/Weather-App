class ImageGen {
    constructor(){
        this.images = {
            clear: 'https://torange.biz/photofx/1/8/mirror-macro-blurring-top-bottom-sky-clear-1049.jpg',
            clouds:'https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            snow: 'https://images.pexels.com/photos/355403/pexels-photo-355403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            rain:'https://media.gettyimages.com/photos/rain-water-drop-falling-to-the-floor-in-rainy-season-picture-id522795232?b=1&k=6&m=522795232&s=612x612&w=0&h=naJBvYVVHLFRDJE4P88rMaXp5zns_mkdfifok3KWuuw=',
            drizzle: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3u36esDR2Dsb0eL6X-UyJVSq8GNl_AVZDTC7r8mFyot0Qn7VR',
            thunderstorm: 'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            default:'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&w=1000&q=80',
        }
    }
    getConditionImage(condition) {
        condition = condition.toLowerCase()
        if(this.images[condition]) {
            return `url(${this.images[condition]})`
        } else {
            return `url(${this.images.default})`
        }
    }
}