import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CLIENTE')
export class Cliente {

    @PrimaryGeneratedColumn()
    private id_cliente: number;


    @Column()
    private usuario: string;

    public getUsuario(): string {
        return this.usuario;
    }

    public setUsuario(usuario: string): void {
        this.usuario = usuario;
    }

    @Column()
    private pass: string;

    public getPass(): string {
        return this.pass;
    }

    public setPass(pass: string): void {
        this.pass = pass;
    }

    @Column()
    private administrador: boolean;

    public getAdmin(): boolean {
        return this.administrador;
    }

    public setAdmin(administrador: boolean): void {
        this.administrador = administrador;
    }

    public constructor(usuario?: string, pass?: string, administrador?: boolean) {
        this.usuario = usuario;
        this.pass = pass;
        this.administrador = administrador;
    }

    public getId(): number {
        return this.id_cliente;
    }

    public setId(id_cliente: number) {
        this.id_cliente = id_cliente;
    }

} 