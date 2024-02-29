package com.event.eventmanagement.Service.ServiceImplementation;

import org.springframework.stereotype.Service;

import com.event.eventmanagement.DTO.EventDTO;
import com.event.eventmanagement.Entity.Event;
// import com.event.eventmanagement.Entity.Eventuser;
import com.event.eventmanagement.Repository.EventRepo;
import com.event.eventmanagement.Service.EventService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EventServiceImplementation implements EventService{
    private EventRepo eventRepo;

    @Override
public void createEvent(EventDTO eventDto) {
    Event event = new Event(); // Fix typo: Change "-" to "="
    event.setEName(eventDto.getEName());
    event.setEVenue(eventDto.getEVenue());
    event.setEdate(eventDto.getEdate());
    event.setECost(eventDto.getECost());
    eventRepo.save(event);
}
}


