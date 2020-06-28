import { Injectable } from '@nestjs/common';
import { LocalSession } from '../../interfaces/session';

@Injectable()
export class SessionProvider {
    private userSession: LocalSession = {
        userId: "",
        username: "",
        isLoggedIn: false,
        cards: []
    };

    setUserId(userId: string) {
        this.userSession.userId = userId;
    }

    getUserId(): string {
        return this.userSession.userId;
    }

    setUsername(username: string) {
        this.userSession.username = username;
    }

    getUsername(): string {
        return this.userSession.username;
    }

    setLogin(loggedIn: boolean) {
        this.userSession.isLoggedIn = loggedIn;
    }

    getLoggedIn(): boolean {
        return this.userSession.isLoggedIn;
    }

    setCards(cards: string[]) {
        this.userSession.cards = cards;
    }

    addCards(card: string) {
        this.userSession.cards.push(card);
    }

    removeCard(card: string) {
        this.userSession.cards = this.userSession.cards.filter(c => { c !== card })
    }

    getCards(): string[] {
        return this.userSession.cards;
    }

    clear() {
        this.userSession = null;
    }
}