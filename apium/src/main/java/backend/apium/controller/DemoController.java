package backend.apium.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class DemoController {

    @GetMapping("/testing")
    public String sayHello(){
        return "Hello! I am testing my Auth Security";
    }
}
