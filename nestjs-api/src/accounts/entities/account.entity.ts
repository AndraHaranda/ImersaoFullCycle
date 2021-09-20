import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';
import { ToNumber } from '../../common/db/to-number.decorator';
import { CreateAccountDto } from '../dto/create-account.dto';

@Table({
  tableName: 'accounts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Account extends Model {
  static create(createAccountDto: CreateAccountDto) {
    throw new Error('Method not implemented.');
  }
  static findAll() {
    throw new Error('Method not implemented.');
  }
  static findByPk(id: string, arg1: { rejectOnEmpty: boolean; }) {
    throw new Error('Method not implemented.');
  }
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @ToNumber
  @Default(0)
  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  balance: number;

  @Column({ allowNull: false })
  subdomain: string;
}
