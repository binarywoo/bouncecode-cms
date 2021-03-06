/**
 * @author BounceCode, Inc.
 * @packageDocumentation
 * @module server.commons
 */

import { ObjectType, Field } from "type-graphql";
import { DeleteResult } from "typeorm";

/**
 * GraphQL Resolver 에서 반환되는 데이터를 확인하기위한 ObjectType 입니다.
 *
 * @author BounceCode, Inc.
 */
@ObjectType()
export class DeleteResultObject extends DeleteResult {
  @Field()
  affected?: number | null;
}
