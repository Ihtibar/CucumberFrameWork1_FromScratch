package Steps;

import Pages.Elements;
import Utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.KeyInput;

import java.util.concurrent.TimeUnit;

public class SearchStep  {

    // any class that containd cucumber nitaidtin cammat be exanded
      Elements e ;
      Actions act ;
      // ant class contais step definition cannot extends


    @When("go to {string} website")
    public void go_to_website(String Web) {

        Driver.getDriver().navigate().to(Web);   //Driver.getDriver()
        act.pause(2000).perform();

    }

    @Then("Enter {string} in search box")
    public void enter_in_search_box(String string) {
        e.GoogleSearch.sendKeys(string);
        act.pause(2000).perform();
    }
    @Then("Close browser")
    public void close_browser() {
        Driver.CloseDriver();
    }

    @Given("Environment ready")
    public void environment_ready() {
        Driver.getDriver().manage().window().maximize();
        Driver.getDriver().manage().timeouts().setScriptTimeout(2000, TimeUnit.SECONDS);
        act = new Actions(Driver.getDriver());
        e = new Elements();
    }
    @When("enter {string} in the new Search box")

    public void enter_in_the_new_Search_box(String string) {
        act.moveToElement(e.AmazonSearch).click().sendKeys(string).perform();

    e.AmazonSearch.sendKeys(string+ Keys.ENTER);
    }









}
