package com.event.eventmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.eventmanagement.DTO.EventDTO;
import com.event.eventmanagement.Service.EventService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/User/")
public class EventController {

    @Autowired
    EventService eventService;

    @PostMapping("/post")
    public void createEvent(@RequestBody EventDTO eventDto) {
        eventService.createEvent(eventDto);
    }
}
