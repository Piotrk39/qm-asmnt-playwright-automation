exports.AboutUsElms = class AboutUsElms {
    static SEARCH_FOR_EVENTS_INPUT = '//input[@placeholder="Search for events"]';
    static FIND_EVENTS_BUTTON = '//button[@name="submit-bar"]';
    static NO_RESULTS_MESSAGE = '//*[@id="main-content"]/div/div/div/div/div/div/div/div/div/header/div[1]/div/ul/li';
    static RESULT_TITLE = '(//a[@title="ICSTTP 2021: 15. International Conference on Software Testing, Types and Process"])[2]';
    static EVENTS_RESULTS = "//a[@class='tribe-events-calendar-list__event-title-link tribe-common-anchor-thin']";
    static EVENT_START_DATE = '//time/span[@class="tribe-event-date-start"]'
    
    // ---------------------- Calendar ---------------------- //
    
    static NOW_ONWARDS_BUTTON = '//time';
    static YEAR_MONTH_SWITCH = '(//th[@class="datepicker-switch"])[1]';
    static YEAR_SWITCH = '(//th[@class="datepicker-switch"])[2]';

    static selectYear(year) {
        return `//span[text()="${year}"]`
    }

    static selectMonth(month) {
        return `//span[text()="${month}"]`
    }

    static selectDay(day) {
        return `//tr/td[@data-date and text()="${day}"]`
    }

}