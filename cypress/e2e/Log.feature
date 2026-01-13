Feature: Login validation challenge

    Background:
        Given navigate to the webdrive login

    Scenario Outline: Login Validation with diffrent credentials
        When type a '<userName>' and a password '<password>'
        And click in the button submit
        Then should show a toast telling '<message>'


        Examples:
            | userName    | password     | message              |
            | webdriver   | webdriver123 | validation succeeded |
            | laracardoso | 123          | validation failed    |
            | sua         | mae          | validation failed    |