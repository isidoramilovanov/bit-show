class Season {
    constructor(season) {
        this.showStartDate = season.premiereDate;
        this.showEndDate = season.endDate;
        this.seasonId = season.id
    }
}

export default Season;