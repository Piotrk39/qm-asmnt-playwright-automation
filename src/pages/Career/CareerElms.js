exports.CareerElms = class CareerElms {
    static TITLE_STELLENAGEBOTE = '//h1/span[text()="Stellenangebote"]';
    static JOB_LISTING = '//div[@class="awsm-job-listing-item awsm-grid-item"]';
    static JOB_LISTING_INNER_FORM = '//div[@class="awsm-job-form-inner"]';
    static SUBMIT_FORM_BUTTON = '//input[@value="SENDEN"]';
    static NAME_ERROR = '//*[@id="awsm-applicant-name-error"]';
    static EMAIL_ERROR = '//*[@id="awsm-applicant-email-error"]';
    static PHONE_ERROR = '//*[@id="awsm-applicant-phone-error"]';
    static COVER_LETTER_ERROR = '//*[@id="awsm-applicant-cover-letter-error"]';
    static NAME_AND_SURNAME_INPUT = '#awsm-applicant-name';
    static EMAIL_INPUT = '#awsm-applicant-email';
    static PHONE_INPUT = '#awsm-applicant-phone';
    static LISTING_CONTENT = '//div[@class="awsm-job-entry-content entry-content"]';
    static COVER_LETTER_INPUT ='#awsm-cover-letter';
    static UPLOAD_INPUT = '//div[@class="custom-input"]';
    static PRIVACY_POLICY_CHECKBOX = '//*[@id="awsm_form_privacy_policy"]';
    static PRIVACY_POLICY_ERROR = '#awsm_form_privacy_policy-error';

    // ----------------------- NOT DISPLAYED ERRORS ----------------------- //

    static NO_ERROR_NAME = '//*[@id="awsm-applicant-name-error" and @style="display: none;"]';
    static NO_COVER_LETTER_ERROR = '//*[@id="awsm-cover-letter" and @aria-invalid="false"]';
    static NO_PRIVACY_POLICY_ERROR = '//*[@id="awsm_form_privacy_policy" and @aria-invalid="false"]';

    // ----------------------- ---------------------------------------- ----------------------- //

    static clickAnyJobListing(number) {
        return `(//span[text()="Erfahre mehr "])[${number}]`
    }
}