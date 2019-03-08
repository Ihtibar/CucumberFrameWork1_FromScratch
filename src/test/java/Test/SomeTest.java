package Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)// cucumber run with bjunit
@CucumberOptions(features = "Features",
                 dryRun = false,
                 tags = "@User2",
                  glue = "Steps",
                  plugin = {"html:CucumberReports",
                  "junit:CucumberReports/JunitReport.xml",
                  "usage:CucumberReports/UsageReport.json",
                  "pretty:CucumberReports/PrettyReport.txt"})


public class SomeTest {




}
