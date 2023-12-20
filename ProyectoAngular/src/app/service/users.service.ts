import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { User } from "../model/User";

@Injectable({
    providedIn: "root"
})
export class UsersService {

    private url: string = "http://localhost:8080/api/users";

    constructor(private http: HttpClient) { }

    // Get Users
    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    // Get User By Id
    getById(id: number): Observable<User> {
        return this.http.get<User>(this.url + "/" + id);
    }

    // Create User
    createUser(user: User): Observable<User> {
        return this.http.post<User>(this.url, user);
    }

    // Update Client
    updateUser(user: User): Observable<User> {
        return this.http.put<User>(this.url + "/" + user.id, user);
    }

    // Delete User
    deleteUser(id: number): Observable<User> {
        return this.http.delete<User>(this.url + "/" + id);
    }
}