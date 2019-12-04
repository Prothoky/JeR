package es.sidelab.AtrapaLaBandera;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpServletRequest;

import org.apache.tomcat.jni.Time;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import com.google.gson.*;

@RestController
@RequestMapping("/users")
public class UsersController {
	
	private static Map<String,User> users  = new ConcurrentHashMap<String, User>();
	private List<String> userlist = new ArrayList<String>();
	public UsersController(){
		TakeInfo();
	}
	
	public void TakeInfo(){
		try (FileReader file = new FileReader("C:\\Users\\Proth\\Documents\\STS_WorkSpace\\ALB\\data.json")){
			Gson gson = new Gson();
			User usuarios[] = gson.fromJson(file,User[].class);
			if(usuarios !=null ) {
				for (User user : usuarios) {
					String name = user.getName();
					users.put(name, user);
					userlist.add(name);
				}
			}
        }catch(FileNotFoundException e ) {
        	System.out.println("File not found");
        	
        }catch (IOException e) {
            e.printStackTrace();
        }
	}
	
	
	@GetMapping
	public Collection<User> Users() {
		return users.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<String> newUser(@RequestBody User usuario,HttpServletRequest request) {
		String ip = getIP(request);
		String name = usuario.getName();
		if(!users.containsKey(name)) {
			usuario.setIp(ip);
			users.put(name, usuario);
			userlist.add(name);
			SaveInfo();
			return ResponseEntity.status(HttpStatus.OK).body(usuario.toString());
		}
		else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("The user "+ usuario.getName() + " con ip " + ip + " has already been created");
		}

	}

	@PutMapping("/{name}")
	public ResponseEntity<User> UpdateUser(@PathVariable String name, @RequestBody User userUpdated) {

		User savedUser = users.get(name);

		if (savedUser != null) {
			users.remove(name);
			users.put(userUpdated.getName(), userUpdated);
			userlist.remove(name);
			userlist.add(userUpdated.getName());
			SaveInfo();
			return new ResponseEntity<User>(userUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}

	//Petición de polling
	@GetMapping("/{name}")
	public ResponseEntity<User> getUser(@PathVariable String name) {
		Date time = new Date();
		User savedUser = users.get(name);
		if(savedUser!=null) {
			savedUser.SetOnline(true);
			savedUser.setTime(time);
			users.put(name, savedUser);
			return new ResponseEntity<User>(savedUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
/*
	@DeleteMapping("/{id}")
	public ResponseEntity<User> borraUser(@PathVariable String id) {

		User savedUser = users.get(id);

		if (savedUser != null) {
			users.remove(savedUser.getId());
			SaveInfo();
			return new ResponseEntity<User>(savedUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
*/
	public String getIP(HttpServletRequest request) {
		String remoteAddr=null;
		if (request != null) {
			remoteAddr = request.getHeader("X-FORWARDED-FOR");
			if (remoteAddr == null || "".equals(remoteAddr)) {
				remoteAddr = request.getRemoteAddr();
			}
		}
		return remoteAddr;				
	}

	public void SaveInfo() {
		try (FileWriter file = new FileWriter("C:\\Users\\Proth\\Documents\\STS_WorkSpace\\ALB\\data.json")) {
			Gson gson = new Gson();
			gson.toJson(users.values(), file);			
        } catch (IOException e) {
            e.printStackTrace();
        }
	}
	
	@Scheduled(fixedRate=2000)
    public void CheckUsersOnline() {
		int num=0;
		if(users!=null && userlist!=null) {
			for (String name : userlist) {
				User user = users.get(name);
				if(user.getOnline()) {
					if(new Date().getTime() - user.getTime().getTime() >= 10000) {
						user.SetOnline(false);
						users.put(user.getName(), user);
					}
					else {
						System.out.println(user.getName() + " is Online");
						user.SetOnline(true);
						users.put(user.getName(), user);
						num++;
					}
				}
			}
		}
		System.out.println("Hay " + num + " usuarios conectados");
	}
}
