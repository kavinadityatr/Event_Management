package com.event.eventmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.eventmanagement.DTO.EventDTO;
import com.event.eventmanagement.Service.EventService;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/event/")
public class EventController {

    @Autowired
    EventService eventService;

    @PostMapping("/post")
    public void createEvent(@RequestBody EventDTO eventDto) {
        eventService.createEvent(eventDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventDTO> getEventById(@PathVariable int id) {
        EventDTO eventDto = eventService.getEventById(id);
        return ResponseEntity.ok().body(eventDto);
    }

     @GetMapping("/all")
    public ResponseEntity<List<EventDTO>> getAllEvents() {
        List<EventDTO> eventDtos = eventService.getAllEvents();
        return ResponseEntity.ok().body(eventDtos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable int id) {
        eventService.deleteEvent(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateEvent(@PathVariable int id, @RequestBody EventDTO eventDto) {
        eventService.updateEvent(id, eventDto);
        return ResponseEntity.ok().build();
    }
}
