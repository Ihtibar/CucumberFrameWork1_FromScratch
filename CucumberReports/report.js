$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Search.feature");
formatter.feature({
  "name": "Testing searches",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@User2"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Scenario Template:  Google Search",
  "description": "",
  "keyword": "Scenario Template",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.google.com\u0027 website",
  "keyword": "When "
});
formatter.step({
  "name": "Enter \u0027\u003cProducts\u003e\u0027 in search box",
  "keyword": "Then "
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Products"
      ]
    },
    {
      "cells": [
        "apple"
      ]
    },
    {
      "cells": [
        "yangyu"
      ]
    },
    {
      "cells": [
        "iphone"
      ]
    },
    {
      "cells": [
        "Rayisa"
      ]
    }
  ]
});
formatter.background({
  "name": "setup",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Environment ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.environment_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario Template:  Google Search",
  "description": "",
  "keyword": "Scenario Template",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@User2"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.google.com\u0027 website",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStep.go_to_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \u0027apple\u0027 in search box",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.enter_in_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStep.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "setup",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Environment ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.environment_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario Template:  Google Search",
  "description": "",
  "keyword": "Scenario Template",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@User2"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.google.com\u0027 website",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStep.go_to_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \u0027yangyu\u0027 in search box",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.enter_in_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStep.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "setup",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Environment ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.environment_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario Template:  Google Search",
  "description": "",
  "keyword": "Scenario Template",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@User2"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.google.com\u0027 website",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStep.go_to_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \u0027iphone\u0027 in search box",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.enter_in_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStep.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "setup",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Environment ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.environment_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario Template:  Google Search",
  "description": "",
  "keyword": "Scenario Template",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@User2"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.google.com\u0027 website",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStep.go_to_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \u0027Rayisa\u0027 in search box",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.enter_in_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStep.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "xxxxx",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.amazon.com\u0027 website",
  "keyword": "When "
});
formatter.step({
  "name": "enter \"\u003cProducts\u003e\" in the new Search box",
  "keyword": "And "
});
formatter.step({
  "name": "Close Browser",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Products"
      ]
    },
    {
      "cells": [
        "apple"
      ]
    },
    {
      "cells": [
        "yagyu"
      ]
    },
    {
      "cells": [
        "iphone"
      ]
    },
    {
      "cells": [
        "Rayisa"
      ]
    }
  ]
});
formatter.background({
  "name": "setup",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Environment ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.environment_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "xxxxx",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@User2"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.amazon.com\u0027 website",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStep.go_to_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"apple\" in the new Search box",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStep.enter_in_the_new_Search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "setup",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Environment ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.environment_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "xxxxx",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@User2"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.amazon.com\u0027 website",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStep.go_to_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"yagyu\" in the new Search box",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStep.enter_in_the_new_Search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "setup",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Environment ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.environment_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "xxxxx",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@User2"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.amazon.com\u0027 website",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStep.go_to_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"iphone\" in the new Search box",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStep.enter_in_the_new_Search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "setup",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Environment ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStep.environment_ready()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "xxxxx",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@User2"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "go to \u0027https://www.amazon.com\u0027 website",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStep.go_to_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"Rayisa\" in the new Search box",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStep.enter_in_the_new_Search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});