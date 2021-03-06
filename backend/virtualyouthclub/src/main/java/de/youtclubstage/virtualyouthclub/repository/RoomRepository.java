package de.youtclubstage.virtualyouthclub.repository;

import de.youtclubstage.virtualyouthclub.entity.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface RoomRepository extends MongoRepository<Room, UUID> {
    Page<Room> findAllByNameContainingIgnoreCase(String search, Pageable pageable);
}
