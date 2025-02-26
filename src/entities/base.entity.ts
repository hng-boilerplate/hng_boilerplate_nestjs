import { ApiProperty } from '@nestjs/swagger';
import { Entity, CreateDateColumn, UpdateDateColumn, BeforeInsert, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity()
export class AbstractBaseEntity {
  @ApiProperty()
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @BeforeInsert()
  generateId?() {
    this.id = uuidV4();
  }
}
