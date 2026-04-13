
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model TeacherSchool
 * 
 */
export type TeacherSchool = $Result.DefaultSelection<Prisma.$TeacherSchoolPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model Attempt
 * 
 */
export type Attempt = $Result.DefaultSelection<Prisma.$AttemptPayload>
/**
 * Model AssignmentTemplate
 * 
 */
export type AssignmentTemplate = $Result.DefaultSelection<Prisma.$AssignmentTemplatePayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model AssignmentField
 * 
 */
export type AssignmentField = $Result.DefaultSelection<Prisma.$AssignmentFieldPayload>
/**
 * Model AssignmentSubmission
 * 
 */
export type AssignmentSubmission = $Result.DefaultSelection<Prisma.$AssignmentSubmissionPayload>
/**
 * Model TestAnswerFirst
 * Первый зафиксированный ответ ученика на тестовый блок (single_choice).
 */
export type TestAnswerFirst = $Result.DefaultSelection<Prisma.$TestAnswerFirstPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherSchool`: Exposes CRUD operations for the **TeacherSchool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherSchools
    * const teacherSchools = await prisma.teacherSchool.findMany()
    * ```
    */
  get teacherSchool(): Prisma.TeacherSchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attempt`: Exposes CRUD operations for the **Attempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attempts
    * const attempts = await prisma.attempt.findMany()
    * ```
    */
  get attempt(): Prisma.AttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentTemplate`: Exposes CRUD operations for the **AssignmentTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentTemplates
    * const assignmentTemplates = await prisma.assignmentTemplate.findMany()
    * ```
    */
  get assignmentTemplate(): Prisma.AssignmentTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentField`: Exposes CRUD operations for the **AssignmentField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentFields
    * const assignmentFields = await prisma.assignmentField.findMany()
    * ```
    */
  get assignmentField(): Prisma.AssignmentFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentSubmission`: Exposes CRUD operations for the **AssignmentSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentSubmissions
    * const assignmentSubmissions = await prisma.assignmentSubmission.findMany()
    * ```
    */
  get assignmentSubmission(): Prisma.AssignmentSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testAnswerFirst`: Exposes CRUD operations for the **TestAnswerFirst** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestAnswerFirsts
    * const testAnswerFirsts = await prisma.testAnswerFirst.findMany()
    * ```
    */
  get testAnswerFirst(): Prisma.TestAnswerFirstDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    School: 'School',
    Student: 'Student',
    Teacher: 'Teacher',
    TeacherSchool: 'TeacherSchool',
    Course: 'Course',
    Lesson: 'Lesson',
    Attempt: 'Attempt',
    AssignmentTemplate: 'AssignmentTemplate',
    Assignment: 'Assignment',
    AssignmentField: 'AssignmentField',
    AssignmentSubmission: 'AssignmentSubmission',
    TestAnswerFirst: 'TestAnswerFirst'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "school" | "student" | "teacher" | "teacherSchool" | "course" | "lesson" | "attempt" | "assignmentTemplate" | "assignment" | "assignmentField" | "assignmentSubmission" | "testAnswerFirst"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      TeacherSchool: {
        payload: Prisma.$TeacherSchoolPayload<ExtArgs>
        fields: Prisma.TeacherSchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherSchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherSchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          findFirst: {
            args: Prisma.TeacherSchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherSchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          findMany: {
            args: Prisma.TeacherSchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>[]
          }
          create: {
            args: Prisma.TeacherSchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          createMany: {
            args: Prisma.TeacherSchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherSchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>[]
          }
          delete: {
            args: Prisma.TeacherSchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          update: {
            args: Prisma.TeacherSchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          deleteMany: {
            args: Prisma.TeacherSchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherSchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherSchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>[]
          }
          upsert: {
            args: Prisma.TeacherSchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          aggregate: {
            args: Prisma.TeacherSchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherSchool>
          }
          groupBy: {
            args: Prisma.TeacherSchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherSchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherSchoolCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherSchoolCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      Attempt: {
        payload: Prisma.$AttemptPayload<ExtArgs>
        fields: Prisma.AttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findFirst: {
            args: Prisma.AttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findMany: {
            args: Prisma.AttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          create: {
            args: Prisma.AttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          createMany: {
            args: Prisma.AttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          delete: {
            args: Prisma.AttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          update: {
            args: Prisma.AttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          deleteMany: {
            args: Prisma.AttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          upsert: {
            args: Prisma.AttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          aggregate: {
            args: Prisma.AttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttempt>
          }
          groupBy: {
            args: Prisma.AttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttemptCountArgs<ExtArgs>
            result: $Utils.Optional<AttemptCountAggregateOutputType> | number
          }
        }
      }
      AssignmentTemplate: {
        payload: Prisma.$AssignmentTemplatePayload<ExtArgs>
        fields: Prisma.AssignmentTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload>
          }
          findFirst: {
            args: Prisma.AssignmentTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload>
          }
          findMany: {
            args: Prisma.AssignmentTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload>[]
          }
          create: {
            args: Prisma.AssignmentTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload>
          }
          createMany: {
            args: Prisma.AssignmentTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload>[]
          }
          delete: {
            args: Prisma.AssignmentTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload>
          }
          update: {
            args: Prisma.AssignmentTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload>
          }
          deleteMany: {
            args: Prisma.AssignmentTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload>[]
          }
          upsert: {
            args: Prisma.AssignmentTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentTemplatePayload>
          }
          aggregate: {
            args: Prisma.AssignmentTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentTemplate>
          }
          groupBy: {
            args: Prisma.AssignmentTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentTemplateCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      AssignmentField: {
        payload: Prisma.$AssignmentFieldPayload<ExtArgs>
        fields: Prisma.AssignmentFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload>
          }
          findMany: {
            args: Prisma.AssignmentFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload>[]
          }
          create: {
            args: Prisma.AssignmentFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload>
          }
          createMany: {
            args: Prisma.AssignmentFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload>[]
          }
          delete: {
            args: Prisma.AssignmentFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload>
          }
          update: {
            args: Prisma.AssignmentFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentFieldPayload>
          }
          aggregate: {
            args: Prisma.AssignmentFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentField>
          }
          groupBy: {
            args: Prisma.AssignmentFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentFieldCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentFieldCountAggregateOutputType> | number
          }
        }
      }
      AssignmentSubmission: {
        payload: Prisma.$AssignmentSubmissionPayload<ExtArgs>
        fields: Prisma.AssignmentSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          findFirst: {
            args: Prisma.AssignmentSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          findMany: {
            args: Prisma.AssignmentSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>[]
          }
          create: {
            args: Prisma.AssignmentSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          createMany: {
            args: Prisma.AssignmentSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>[]
          }
          delete: {
            args: Prisma.AssignmentSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          update: {
            args: Prisma.AssignmentSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          aggregate: {
            args: Prisma.AssignmentSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentSubmission>
          }
          groupBy: {
            args: Prisma.AssignmentSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentSubmissionCountAggregateOutputType> | number
          }
        }
      }
      TestAnswerFirst: {
        payload: Prisma.$TestAnswerFirstPayload<ExtArgs>
        fields: Prisma.TestAnswerFirstFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestAnswerFirstFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestAnswerFirstFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload>
          }
          findFirst: {
            args: Prisma.TestAnswerFirstFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestAnswerFirstFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload>
          }
          findMany: {
            args: Prisma.TestAnswerFirstFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload>[]
          }
          create: {
            args: Prisma.TestAnswerFirstCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload>
          }
          createMany: {
            args: Prisma.TestAnswerFirstCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestAnswerFirstCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload>[]
          }
          delete: {
            args: Prisma.TestAnswerFirstDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload>
          }
          update: {
            args: Prisma.TestAnswerFirstUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload>
          }
          deleteMany: {
            args: Prisma.TestAnswerFirstDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestAnswerFirstUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestAnswerFirstUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload>[]
          }
          upsert: {
            args: Prisma.TestAnswerFirstUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerFirstPayload>
          }
          aggregate: {
            args: Prisma.TestAnswerFirstAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestAnswerFirst>
          }
          groupBy: {
            args: Prisma.TestAnswerFirstGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestAnswerFirstGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestAnswerFirstCountArgs<ExtArgs>
            result: $Utils.Optional<TestAnswerFirstCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    school?: SchoolOmit
    student?: StudentOmit
    teacher?: TeacherOmit
    teacherSchool?: TeacherSchoolOmit
    course?: CourseOmit
    lesson?: LessonOmit
    attempt?: AttemptOmit
    assignmentTemplate?: AssignmentTemplateOmit
    assignment?: AssignmentOmit
    assignmentField?: AssignmentFieldOmit
    assignmentSubmission?: AssignmentSubmissionOmit
    testAnswerFirst?: TestAnswerFirstOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    students: number
    teachers: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | SchoolCountOutputTypeCountStudentsArgs
    teachers?: boolean | SchoolCountOutputTypeCountTeachersArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSchoolWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    attempts: number
    submissions: number
    testAnswerFirsts: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | StudentCountOutputTypeCountAttemptsArgs
    submissions?: boolean | StudentCountOutputTypeCountSubmissionsArgs
    testAnswerFirsts?: boolean | StudentCountOutputTypeCountTestAnswerFirstsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentSubmissionWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountTestAnswerFirstsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAnswerFirstWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    schools: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | TeacherCountOutputTypeCountSchoolsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSchoolWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    lessons: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    attempts: number
    assignments: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | LessonCountOutputTypeCountAttemptsArgs
    assignments?: boolean | LessonCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    fields: number
    submissions: number
    testAnswerFirsts: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | AssignmentCountOutputTypeCountFieldsArgs
    submissions?: boolean | AssignmentCountOutputTypeCountSubmissionsArgs
    testAnswerFirsts?: boolean | AssignmentCountOutputTypeCountTestAnswerFirstsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentFieldWhereInput
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentSubmissionWhereInput
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountTestAnswerFirstsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAnswerFirstWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    code: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: number
    name: string
    code: string | null
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    students?: boolean | School$studentsArgs<ExtArgs>
    teachers?: boolean | School$teachersArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | School$studentsArgs<ExtArgs>
    teachers?: boolean | School$teachersArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
      teachers: Prisma.$TeacherSchoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string | null
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends School$studentsArgs<ExtArgs> = {}>(args?: Subset<T, School$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends School$teachersArgs<ExtArgs> = {}>(args?: Subset<T, School$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'Int'>
    readonly name: FieldRef<"School", 'String'>
    readonly code: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.students
   */
  export type School$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * School.teachers
   */
  export type School$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    where?: TeacherSchoolWhereInput
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    cursor?: TeacherSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    surname: string | null
    name: string | null
    patronymic: string | null
    phone: string | null
    passwordHash: string | null
    schoolId: number | null
    className: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    surname: string | null
    name: string | null
    patronymic: string | null
    phone: string | null
    passwordHash: string | null
    schoolId: number | null
    className: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    surname: number
    name: number
    patronymic: number
    phone: number
    passwordHash: number
    schoolId: number
    className: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    surname?: true
    name?: true
    patronymic?: true
    phone?: true
    passwordHash?: true
    schoolId?: true
    className?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    surname?: true
    name?: true
    patronymic?: true
    phone?: true
    passwordHash?: true
    schoolId?: true
    className?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    surname?: true
    name?: true
    patronymic?: true
    phone?: true
    passwordHash?: true
    schoolId?: true
    className?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    surname: string
    name: string
    patronymic: string | null
    phone: string
    passwordHash: string
    schoolId: number
    className: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    phone?: boolean
    passwordHash?: boolean
    schoolId?: boolean
    className?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    attempts?: boolean | Student$attemptsArgs<ExtArgs>
    submissions?: boolean | Student$submissionsArgs<ExtArgs>
    testAnswerFirsts?: boolean | Student$testAnswerFirstsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    phone?: boolean
    passwordHash?: boolean
    schoolId?: boolean
    className?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    phone?: boolean
    passwordHash?: boolean
    schoolId?: boolean
    className?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    phone?: boolean
    passwordHash?: boolean
    schoolId?: boolean
    className?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "surname" | "name" | "patronymic" | "phone" | "passwordHash" | "schoolId" | "className" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    attempts?: boolean | Student$attemptsArgs<ExtArgs>
    submissions?: boolean | Student$submissionsArgs<ExtArgs>
    testAnswerFirsts?: boolean | Student$testAnswerFirstsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      attempts: Prisma.$AttemptPayload<ExtArgs>[]
      submissions: Prisma.$AssignmentSubmissionPayload<ExtArgs>[]
      testAnswerFirsts: Prisma.$TestAnswerFirstPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      surname: string
      name: string
      patronymic: string | null
      phone: string
      passwordHash: string
      schoolId: number
      className: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends Student$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Student$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Student$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Student$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testAnswerFirsts<T extends Student$testAnswerFirstsArgs<ExtArgs> = {}>(args?: Subset<T, Student$testAnswerFirstsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly surname: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly patronymic: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly passwordHash: FieldRef<"Student", 'String'>
    readonly schoolId: FieldRef<"Student", 'Int'>
    readonly className: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.attempts
   */
  export type Student$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    cursor?: AttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Student.submissions
   */
  export type Student$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    where?: AssignmentSubmissionWhereInput
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    cursor?: AssignmentSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * Student.testAnswerFirsts
   */
  export type Student$testAnswerFirstsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    where?: TestAnswerFirstWhereInput
    orderBy?: TestAnswerFirstOrderByWithRelationInput | TestAnswerFirstOrderByWithRelationInput[]
    cursor?: TestAnswerFirstWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestAnswerFirstScalarFieldEnum | TestAnswerFirstScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    emailOrPhone: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    emailOrPhone: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    emailOrPhone: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    emailOrPhone?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    emailOrPhone?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    emailOrPhone?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    emailOrPhone: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailOrPhone?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schools?: boolean | Teacher$schoolsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailOrPhone?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailOrPhone?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    emailOrPhone?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emailOrPhone" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | Teacher$schoolsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      schools: Prisma.$TeacherSchoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      emailOrPhone: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schools<T extends Teacher$schoolsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$schoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly emailOrPhone: FieldRef<"Teacher", 'String'>
    readonly passwordHash: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.schools
   */
  export type Teacher$schoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    where?: TeacherSchoolWhereInput
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    cursor?: TeacherSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model TeacherSchool
   */

  export type AggregateTeacherSchool = {
    _count: TeacherSchoolCountAggregateOutputType | null
    _avg: TeacherSchoolAvgAggregateOutputType | null
    _sum: TeacherSchoolSumAggregateOutputType | null
    _min: TeacherSchoolMinAggregateOutputType | null
    _max: TeacherSchoolMaxAggregateOutputType | null
  }

  export type TeacherSchoolAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
    schoolId: number | null
  }

  export type TeacherSchoolSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
    schoolId: number | null
  }

  export type TeacherSchoolMinAggregateOutputType = {
    id: number | null
    teacherId: number | null
    schoolId: number | null
  }

  export type TeacherSchoolMaxAggregateOutputType = {
    id: number | null
    teacherId: number | null
    schoolId: number | null
  }

  export type TeacherSchoolCountAggregateOutputType = {
    id: number
    teacherId: number
    schoolId: number
    _all: number
  }


  export type TeacherSchoolAvgAggregateInputType = {
    id?: true
    teacherId?: true
    schoolId?: true
  }

  export type TeacherSchoolSumAggregateInputType = {
    id?: true
    teacherId?: true
    schoolId?: true
  }

  export type TeacherSchoolMinAggregateInputType = {
    id?: true
    teacherId?: true
    schoolId?: true
  }

  export type TeacherSchoolMaxAggregateInputType = {
    id?: true
    teacherId?: true
    schoolId?: true
  }

  export type TeacherSchoolCountAggregateInputType = {
    id?: true
    teacherId?: true
    schoolId?: true
    _all?: true
  }

  export type TeacherSchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSchool to aggregate.
     */
    where?: TeacherSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSchools to fetch.
     */
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherSchools
    **/
    _count?: true | TeacherSchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherSchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherSchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherSchoolMaxAggregateInputType
  }

  export type GetTeacherSchoolAggregateType<T extends TeacherSchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherSchool[P]>
      : GetScalarType<T[P], AggregateTeacherSchool[P]>
  }




  export type TeacherSchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSchoolWhereInput
    orderBy?: TeacherSchoolOrderByWithAggregationInput | TeacherSchoolOrderByWithAggregationInput[]
    by: TeacherSchoolScalarFieldEnum[] | TeacherSchoolScalarFieldEnum
    having?: TeacherSchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherSchoolCountAggregateInputType | true
    _avg?: TeacherSchoolAvgAggregateInputType
    _sum?: TeacherSchoolSumAggregateInputType
    _min?: TeacherSchoolMinAggregateInputType
    _max?: TeacherSchoolMaxAggregateInputType
  }

  export type TeacherSchoolGroupByOutputType = {
    id: number
    teacherId: number
    schoolId: number
    _count: TeacherSchoolCountAggregateOutputType | null
    _avg: TeacherSchoolAvgAggregateOutputType | null
    _sum: TeacherSchoolSumAggregateOutputType | null
    _min: TeacherSchoolMinAggregateOutputType | null
    _max: TeacherSchoolMaxAggregateOutputType | null
  }

  type GetTeacherSchoolGroupByPayload<T extends TeacherSchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherSchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherSchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherSchoolGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherSchoolGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    schoolId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSchool"]>

  export type TeacherSchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    schoolId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSchool"]>

  export type TeacherSchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    schoolId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSchool"]>

  export type TeacherSchoolSelectScalar = {
    id?: boolean
    teacherId?: boolean
    schoolId?: boolean
  }

  export type TeacherSchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "schoolId", ExtArgs["result"]["teacherSchool"]>
  export type TeacherSchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type TeacherSchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type TeacherSchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $TeacherSchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherSchool"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherId: number
      schoolId: number
    }, ExtArgs["result"]["teacherSchool"]>
    composites: {}
  }

  type TeacherSchoolGetPayload<S extends boolean | null | undefined | TeacherSchoolDefaultArgs> = $Result.GetResult<Prisma.$TeacherSchoolPayload, S>

  type TeacherSchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherSchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherSchoolCountAggregateInputType | true
    }

  export interface TeacherSchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherSchool'], meta: { name: 'TeacherSchool' } }
    /**
     * Find zero or one TeacherSchool that matches the filter.
     * @param {TeacherSchoolFindUniqueArgs} args - Arguments to find a TeacherSchool
     * @example
     * // Get one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherSchoolFindUniqueArgs>(args: SelectSubset<T, TeacherSchoolFindUniqueArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherSchool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherSchoolFindUniqueOrThrowArgs} args - Arguments to find a TeacherSchool
     * @example
     * // Get one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherSchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherSchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSchool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolFindFirstArgs} args - Arguments to find a TeacherSchool
     * @example
     * // Get one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherSchoolFindFirstArgs>(args?: SelectSubset<T, TeacherSchoolFindFirstArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSchool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolFindFirstOrThrowArgs} args - Arguments to find a TeacherSchool
     * @example
     * // Get one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherSchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherSchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherSchools
     * const teacherSchools = await prisma.teacherSchool.findMany()
     * 
     * // Get first 10 TeacherSchools
     * const teacherSchools = await prisma.teacherSchool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherSchoolWithIdOnly = await prisma.teacherSchool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherSchoolFindManyArgs>(args?: SelectSubset<T, TeacherSchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherSchool.
     * @param {TeacherSchoolCreateArgs} args - Arguments to create a TeacherSchool.
     * @example
     * // Create one TeacherSchool
     * const TeacherSchool = await prisma.teacherSchool.create({
     *   data: {
     *     // ... data to create a TeacherSchool
     *   }
     * })
     * 
     */
    create<T extends TeacherSchoolCreateArgs>(args: SelectSubset<T, TeacherSchoolCreateArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherSchools.
     * @param {TeacherSchoolCreateManyArgs} args - Arguments to create many TeacherSchools.
     * @example
     * // Create many TeacherSchools
     * const teacherSchool = await prisma.teacherSchool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherSchoolCreateManyArgs>(args?: SelectSubset<T, TeacherSchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherSchools and returns the data saved in the database.
     * @param {TeacherSchoolCreateManyAndReturnArgs} args - Arguments to create many TeacherSchools.
     * @example
     * // Create many TeacherSchools
     * const teacherSchool = await prisma.teacherSchool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherSchools and only return the `id`
     * const teacherSchoolWithIdOnly = await prisma.teacherSchool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherSchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherSchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherSchool.
     * @param {TeacherSchoolDeleteArgs} args - Arguments to delete one TeacherSchool.
     * @example
     * // Delete one TeacherSchool
     * const TeacherSchool = await prisma.teacherSchool.delete({
     *   where: {
     *     // ... filter to delete one TeacherSchool
     *   }
     * })
     * 
     */
    delete<T extends TeacherSchoolDeleteArgs>(args: SelectSubset<T, TeacherSchoolDeleteArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherSchool.
     * @param {TeacherSchoolUpdateArgs} args - Arguments to update one TeacherSchool.
     * @example
     * // Update one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherSchoolUpdateArgs>(args: SelectSubset<T, TeacherSchoolUpdateArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherSchools.
     * @param {TeacherSchoolDeleteManyArgs} args - Arguments to filter TeacherSchools to delete.
     * @example
     * // Delete a few TeacherSchools
     * const { count } = await prisma.teacherSchool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherSchoolDeleteManyArgs>(args?: SelectSubset<T, TeacherSchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherSchools
     * const teacherSchool = await prisma.teacherSchool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherSchoolUpdateManyArgs>(args: SelectSubset<T, TeacherSchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSchools and returns the data updated in the database.
     * @param {TeacherSchoolUpdateManyAndReturnArgs} args - Arguments to update many TeacherSchools.
     * @example
     * // Update many TeacherSchools
     * const teacherSchool = await prisma.teacherSchool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherSchools and only return the `id`
     * const teacherSchoolWithIdOnly = await prisma.teacherSchool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherSchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherSchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherSchool.
     * @param {TeacherSchoolUpsertArgs} args - Arguments to update or create a TeacherSchool.
     * @example
     * // Update or create a TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.upsert({
     *   create: {
     *     // ... data to create a TeacherSchool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherSchool we want to update
     *   }
     * })
     */
    upsert<T extends TeacherSchoolUpsertArgs>(args: SelectSubset<T, TeacherSchoolUpsertArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolCountArgs} args - Arguments to filter TeacherSchools to count.
     * @example
     * // Count the number of TeacherSchools
     * const count = await prisma.teacherSchool.count({
     *   where: {
     *     // ... the filter for the TeacherSchools we want to count
     *   }
     * })
    **/
    count<T extends TeacherSchoolCountArgs>(
      args?: Subset<T, TeacherSchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherSchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherSchoolAggregateArgs>(args: Subset<T, TeacherSchoolAggregateArgs>): Prisma.PrismaPromise<GetTeacherSchoolAggregateType<T>>

    /**
     * Group by TeacherSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherSchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherSchoolGroupByArgs['orderBy'] }
        : { orderBy?: TeacherSchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherSchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherSchool model
   */
  readonly fields: TeacherSchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherSchool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherSchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherSchool model
   */
  interface TeacherSchoolFieldRefs {
    readonly id: FieldRef<"TeacherSchool", 'Int'>
    readonly teacherId: FieldRef<"TeacherSchool", 'Int'>
    readonly schoolId: FieldRef<"TeacherSchool", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeacherSchool findUnique
   */
  export type TeacherSchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchool to fetch.
     */
    where: TeacherSchoolWhereUniqueInput
  }

  /**
   * TeacherSchool findUniqueOrThrow
   */
  export type TeacherSchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchool to fetch.
     */
    where: TeacherSchoolWhereUniqueInput
  }

  /**
   * TeacherSchool findFirst
   */
  export type TeacherSchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchool to fetch.
     */
    where?: TeacherSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSchools to fetch.
     */
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSchools.
     */
    cursor?: TeacherSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSchools.
     */
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * TeacherSchool findFirstOrThrow
   */
  export type TeacherSchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchool to fetch.
     */
    where?: TeacherSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSchools to fetch.
     */
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSchools.
     */
    cursor?: TeacherSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSchools.
     */
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * TeacherSchool findMany
   */
  export type TeacherSchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchools to fetch.
     */
    where?: TeacherSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSchools to fetch.
     */
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherSchools.
     */
    cursor?: TeacherSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSchools.
     */
    skip?: number
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * TeacherSchool create
   */
  export type TeacherSchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherSchool.
     */
    data: XOR<TeacherSchoolCreateInput, TeacherSchoolUncheckedCreateInput>
  }

  /**
   * TeacherSchool createMany
   */
  export type TeacherSchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherSchools.
     */
    data: TeacherSchoolCreateManyInput | TeacherSchoolCreateManyInput[]
  }

  /**
   * TeacherSchool createManyAndReturn
   */
  export type TeacherSchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherSchools.
     */
    data: TeacherSchoolCreateManyInput | TeacherSchoolCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSchool update
   */
  export type TeacherSchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherSchool.
     */
    data: XOR<TeacherSchoolUpdateInput, TeacherSchoolUncheckedUpdateInput>
    /**
     * Choose, which TeacherSchool to update.
     */
    where: TeacherSchoolWhereUniqueInput
  }

  /**
   * TeacherSchool updateMany
   */
  export type TeacherSchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherSchools.
     */
    data: XOR<TeacherSchoolUpdateManyMutationInput, TeacherSchoolUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSchools to update
     */
    where?: TeacherSchoolWhereInput
    /**
     * Limit how many TeacherSchools to update.
     */
    limit?: number
  }

  /**
   * TeacherSchool updateManyAndReturn
   */
  export type TeacherSchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * The data used to update TeacherSchools.
     */
    data: XOR<TeacherSchoolUpdateManyMutationInput, TeacherSchoolUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSchools to update
     */
    where?: TeacherSchoolWhereInput
    /**
     * Limit how many TeacherSchools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSchool upsert
   */
  export type TeacherSchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherSchool to update in case it exists.
     */
    where: TeacherSchoolWhereUniqueInput
    /**
     * In case the TeacherSchool found by the `where` argument doesn't exist, create a new TeacherSchool with this data.
     */
    create: XOR<TeacherSchoolCreateInput, TeacherSchoolUncheckedCreateInput>
    /**
     * In case the TeacherSchool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherSchoolUpdateInput, TeacherSchoolUncheckedUpdateInput>
  }

  /**
   * TeacherSchool delete
   */
  export type TeacherSchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter which TeacherSchool to delete.
     */
    where: TeacherSchoolWhereUniqueInput
  }

  /**
   * TeacherSchool deleteMany
   */
  export type TeacherSchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSchools to delete
     */
    where?: TeacherSchoolWhereInput
    /**
     * Limit how many TeacherSchools to delete.
     */
    limit?: number
  }

  /**
   * TeacherSchool without action
   */
  export type TeacherSchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends Course$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Course$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly title: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.lessons
   */
  export type Course$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    order: number | null
  }

  export type LessonSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    order: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    title: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    title: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    courseId: number
    title: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    id?: true
    courseId?: true
    order?: true
  }

  export type LessonSumAggregateInputType = {
    id?: true
    courseId?: true
    order?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: number
    courseId: number
    title: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    attempts?: boolean | Lesson$attemptsArgs<ExtArgs>
    assignments?: boolean | Lesson$assignmentsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    courseId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "title" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    attempts?: boolean | Lesson$attemptsArgs<ExtArgs>
    assignments?: boolean | Lesson$assignmentsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      attempts: Prisma.$AttemptPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      title: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends Lesson$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Lesson$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'Int'>
    readonly courseId: FieldRef<"Lesson", 'Int'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly order: FieldRef<"Lesson", 'Int'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
    readonly updatedAt: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.attempts
   */
  export type Lesson$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    cursor?: AttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Lesson.assignments
   */
  export type Lesson$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model Attempt
   */

  export type AggregateAttempt = {
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  export type AttemptAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    lessonId: number | null
    score: number | null
  }

  export type AttemptSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    lessonId: number | null
    score: number | null
  }

  export type AttemptMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    lessonId: number | null
    score: number | null
    completedAt: Date | null
  }

  export type AttemptMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    lessonId: number | null
    score: number | null
    completedAt: Date | null
  }

  export type AttemptCountAggregateOutputType = {
    id: number
    studentId: number
    lessonId: number
    score: number
    completedAt: number
    _all: number
  }


  export type AttemptAvgAggregateInputType = {
    id?: true
    studentId?: true
    lessonId?: true
    score?: true
  }

  export type AttemptSumAggregateInputType = {
    id?: true
    studentId?: true
    lessonId?: true
    score?: true
  }

  export type AttemptMinAggregateInputType = {
    id?: true
    studentId?: true
    lessonId?: true
    score?: true
    completedAt?: true
  }

  export type AttemptMaxAggregateInputType = {
    id?: true
    studentId?: true
    lessonId?: true
    score?: true
    completedAt?: true
  }

  export type AttemptCountAggregateInputType = {
    id?: true
    studentId?: true
    lessonId?: true
    score?: true
    completedAt?: true
    _all?: true
  }

  export type AttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempt to aggregate.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attempts
    **/
    _count?: true | AttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttemptMaxAggregateInputType
  }

  export type GetAttemptAggregateType<T extends AttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttempt[P]>
      : GetScalarType<T[P], AggregateAttempt[P]>
  }




  export type AttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithAggregationInput | AttemptOrderByWithAggregationInput[]
    by: AttemptScalarFieldEnum[] | AttemptScalarFieldEnum
    having?: AttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttemptCountAggregateInputType | true
    _avg?: AttemptAvgAggregateInputType
    _sum?: AttemptSumAggregateInputType
    _min?: AttemptMinAggregateInputType
    _max?: AttemptMaxAggregateInputType
  }

  export type AttemptGroupByOutputType = {
    id: number
    studentId: number
    lessonId: number
    score: number | null
    completedAt: Date
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  type GetAttemptGroupByPayload<T extends AttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttemptGroupByOutputType[P]>
            : GetScalarType<T[P], AttemptGroupByOutputType[P]>
        }
      >
    >


  export type AttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    lessonId?: boolean
    score?: boolean
    completedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    lessonId?: boolean
    score?: boolean
    completedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    lessonId?: boolean
    score?: boolean
    completedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectScalar = {
    id?: boolean
    studentId?: boolean
    lessonId?: boolean
    score?: boolean
    completedAt?: boolean
  }

  export type AttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "lessonId" | "score" | "completedAt", ExtArgs["result"]["attempt"]>
  export type AttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type AttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type AttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $AttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attempt"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      lessonId: number
      score: number | null
      completedAt: Date
    }, ExtArgs["result"]["attempt"]>
    composites: {}
  }

  type AttemptGetPayload<S extends boolean | null | undefined | AttemptDefaultArgs> = $Result.GetResult<Prisma.$AttemptPayload, S>

  type AttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttemptCountAggregateInputType | true
    }

  export interface AttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attempt'], meta: { name: 'Attempt' } }
    /**
     * Find zero or one Attempt that matches the filter.
     * @param {AttemptFindUniqueArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttemptFindUniqueArgs>(args: SelectSubset<T, AttemptFindUniqueArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttemptFindUniqueOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, AttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttemptFindFirstArgs>(args?: SelectSubset<T, AttemptFindFirstArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, AttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attempts
     * const attempts = await prisma.attempt.findMany()
     * 
     * // Get first 10 Attempts
     * const attempts = await prisma.attempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attemptWithIdOnly = await prisma.attempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttemptFindManyArgs>(args?: SelectSubset<T, AttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attempt.
     * @param {AttemptCreateArgs} args - Arguments to create a Attempt.
     * @example
     * // Create one Attempt
     * const Attempt = await prisma.attempt.create({
     *   data: {
     *     // ... data to create a Attempt
     *   }
     * })
     * 
     */
    create<T extends AttemptCreateArgs>(args: SelectSubset<T, AttemptCreateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attempts.
     * @param {AttemptCreateManyArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttemptCreateManyArgs>(args?: SelectSubset<T, AttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attempts and returns the data saved in the database.
     * @param {AttemptCreateManyAndReturnArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, AttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attempt.
     * @param {AttemptDeleteArgs} args - Arguments to delete one Attempt.
     * @example
     * // Delete one Attempt
     * const Attempt = await prisma.attempt.delete({
     *   where: {
     *     // ... filter to delete one Attempt
     *   }
     * })
     * 
     */
    delete<T extends AttemptDeleteArgs>(args: SelectSubset<T, AttemptDeleteArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attempt.
     * @param {AttemptUpdateArgs} args - Arguments to update one Attempt.
     * @example
     * // Update one Attempt
     * const attempt = await prisma.attempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttemptUpdateArgs>(args: SelectSubset<T, AttemptUpdateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attempts.
     * @param {AttemptDeleteManyArgs} args - Arguments to filter Attempts to delete.
     * @example
     * // Delete a few Attempts
     * const { count } = await prisma.attempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttemptDeleteManyArgs>(args?: SelectSubset<T, AttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttemptUpdateManyArgs>(args: SelectSubset<T, AttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts and returns the data updated in the database.
     * @param {AttemptUpdateManyAndReturnArgs} args - Arguments to update many Attempts.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, AttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attempt.
     * @param {AttemptUpsertArgs} args - Arguments to update or create a Attempt.
     * @example
     * // Update or create a Attempt
     * const attempt = await prisma.attempt.upsert({
     *   create: {
     *     // ... data to create a Attempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attempt we want to update
     *   }
     * })
     */
    upsert<T extends AttemptUpsertArgs>(args: SelectSubset<T, AttemptUpsertArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptCountArgs} args - Arguments to filter Attempts to count.
     * @example
     * // Count the number of Attempts
     * const count = await prisma.attempt.count({
     *   where: {
     *     // ... the filter for the Attempts we want to count
     *   }
     * })
    **/
    count<T extends AttemptCountArgs>(
      args?: Subset<T, AttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttemptAggregateArgs>(args: Subset<T, AttemptAggregateArgs>): Prisma.PrismaPromise<GetAttemptAggregateType<T>>

    /**
     * Group by Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttemptGroupByArgs['orderBy'] }
        : { orderBy?: AttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attempt model
   */
  readonly fields: AttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attempt model
   */
  interface AttemptFieldRefs {
    readonly id: FieldRef<"Attempt", 'Int'>
    readonly studentId: FieldRef<"Attempt", 'Int'>
    readonly lessonId: FieldRef<"Attempt", 'Int'>
    readonly score: FieldRef<"Attempt", 'Int'>
    readonly completedAt: FieldRef<"Attempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attempt findUnique
   */
  export type AttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findUniqueOrThrow
   */
  export type AttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findFirst
   */
  export type AttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findFirstOrThrow
   */
  export type AttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findMany
   */
  export type AttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempts to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt create
   */
  export type AttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a Attempt.
     */
    data: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
  }

  /**
   * Attempt createMany
   */
  export type AttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
  }

  /**
   * Attempt createManyAndReturn
   */
  export type AttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt update
   */
  export type AttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a Attempt.
     */
    data: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
    /**
     * Choose, which Attempt to update.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt updateMany
   */
  export type AttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
  }

  /**
   * Attempt updateManyAndReturn
   */
  export type AttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt upsert
   */
  export type AttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the Attempt to update in case it exists.
     */
    where: AttemptWhereUniqueInput
    /**
     * In case the Attempt found by the `where` argument doesn't exist, create a new Attempt with this data.
     */
    create: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
    /**
     * In case the Attempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
  }

  /**
   * Attempt delete
   */
  export type AttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter which Attempt to delete.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt deleteMany
   */
  export type AttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempts to delete
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to delete.
     */
    limit?: number
  }

  /**
   * Attempt without action
   */
  export type AttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
  }


  /**
   * Model AssignmentTemplate
   */

  export type AggregateAssignmentTemplate = {
    _count: AssignmentTemplateCountAggregateOutputType | null
    _avg: AssignmentTemplateAvgAggregateOutputType | null
    _sum: AssignmentTemplateSumAggregateOutputType | null
    _min: AssignmentTemplateMinAggregateOutputType | null
    _max: AssignmentTemplateMaxAggregateOutputType | null
  }

  export type AssignmentTemplateAvgAggregateOutputType = {
    id: number | null
  }

  export type AssignmentTemplateSumAggregateOutputType = {
    id: number | null
  }

  export type AssignmentTemplateMinAggregateOutputType = {
    id: number | null
    key: string | null
    title: string | null
    description: string | null
    configJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentTemplateMaxAggregateOutputType = {
    id: number | null
    key: string | null
    title: string | null
    description: string | null
    configJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentTemplateCountAggregateOutputType = {
    id: number
    key: number
    title: number
    description: number
    configJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssignmentTemplateAvgAggregateInputType = {
    id?: true
  }

  export type AssignmentTemplateSumAggregateInputType = {
    id?: true
  }

  export type AssignmentTemplateMinAggregateInputType = {
    id?: true
    key?: true
    title?: true
    description?: true
    configJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentTemplateMaxAggregateInputType = {
    id?: true
    key?: true
    title?: true
    description?: true
    configJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentTemplateCountAggregateInputType = {
    id?: true
    key?: true
    title?: true
    description?: true
    configJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssignmentTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentTemplate to aggregate.
     */
    where?: AssignmentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentTemplates to fetch.
     */
    orderBy?: AssignmentTemplateOrderByWithRelationInput | AssignmentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignmentTemplates
    **/
    _count?: true | AssignmentTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentTemplateMaxAggregateInputType
  }

  export type GetAssignmentTemplateAggregateType<T extends AssignmentTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentTemplate[P]>
      : GetScalarType<T[P], AggregateAssignmentTemplate[P]>
  }




  export type AssignmentTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentTemplateWhereInput
    orderBy?: AssignmentTemplateOrderByWithAggregationInput | AssignmentTemplateOrderByWithAggregationInput[]
    by: AssignmentTemplateScalarFieldEnum[] | AssignmentTemplateScalarFieldEnum
    having?: AssignmentTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentTemplateCountAggregateInputType | true
    _avg?: AssignmentTemplateAvgAggregateInputType
    _sum?: AssignmentTemplateSumAggregateInputType
    _min?: AssignmentTemplateMinAggregateInputType
    _max?: AssignmentTemplateMaxAggregateInputType
  }

  export type AssignmentTemplateGroupByOutputType = {
    id: number
    key: string
    title: string
    description: string | null
    configJson: string | null
    createdAt: Date
    updatedAt: Date
    _count: AssignmentTemplateCountAggregateOutputType | null
    _avg: AssignmentTemplateAvgAggregateOutputType | null
    _sum: AssignmentTemplateSumAggregateOutputType | null
    _min: AssignmentTemplateMinAggregateOutputType | null
    _max: AssignmentTemplateMaxAggregateOutputType | null
  }

  type GetAssignmentTemplateGroupByPayload<T extends AssignmentTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentTemplateGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    configJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["assignmentTemplate"]>

  export type AssignmentTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    configJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["assignmentTemplate"]>

  export type AssignmentTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    configJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["assignmentTemplate"]>

  export type AssignmentTemplateSelectScalar = {
    id?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    configJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssignmentTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "title" | "description" | "configJson" | "createdAt" | "updatedAt", ExtArgs["result"]["assignmentTemplate"]>

  export type $AssignmentTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignmentTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      title: string
      description: string | null
      configJson: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assignmentTemplate"]>
    composites: {}
  }

  type AssignmentTemplateGetPayload<S extends boolean | null | undefined | AssignmentTemplateDefaultArgs> = $Result.GetResult<Prisma.$AssignmentTemplatePayload, S>

  type AssignmentTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentTemplateCountAggregateInputType | true
    }

  export interface AssignmentTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignmentTemplate'], meta: { name: 'AssignmentTemplate' } }
    /**
     * Find zero or one AssignmentTemplate that matches the filter.
     * @param {AssignmentTemplateFindUniqueArgs} args - Arguments to find a AssignmentTemplate
     * @example
     * // Get one AssignmentTemplate
     * const assignmentTemplate = await prisma.assignmentTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentTemplateFindUniqueArgs>(args: SelectSubset<T, AssignmentTemplateFindUniqueArgs<ExtArgs>>): Prisma__AssignmentTemplateClient<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentTemplateFindUniqueOrThrowArgs} args - Arguments to find a AssignmentTemplate
     * @example
     * // Get one AssignmentTemplate
     * const assignmentTemplate = await prisma.assignmentTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentTemplateClient<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentTemplateFindFirstArgs} args - Arguments to find a AssignmentTemplate
     * @example
     * // Get one AssignmentTemplate
     * const assignmentTemplate = await prisma.assignmentTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentTemplateFindFirstArgs>(args?: SelectSubset<T, AssignmentTemplateFindFirstArgs<ExtArgs>>): Prisma__AssignmentTemplateClient<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentTemplateFindFirstOrThrowArgs} args - Arguments to find a AssignmentTemplate
     * @example
     * // Get one AssignmentTemplate
     * const assignmentTemplate = await prisma.assignmentTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentTemplateClient<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentTemplates
     * const assignmentTemplates = await prisma.assignmentTemplate.findMany()
     * 
     * // Get first 10 AssignmentTemplates
     * const assignmentTemplates = await prisma.assignmentTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentTemplateWithIdOnly = await prisma.assignmentTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentTemplateFindManyArgs>(args?: SelectSubset<T, AssignmentTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentTemplate.
     * @param {AssignmentTemplateCreateArgs} args - Arguments to create a AssignmentTemplate.
     * @example
     * // Create one AssignmentTemplate
     * const AssignmentTemplate = await prisma.assignmentTemplate.create({
     *   data: {
     *     // ... data to create a AssignmentTemplate
     *   }
     * })
     * 
     */
    create<T extends AssignmentTemplateCreateArgs>(args: SelectSubset<T, AssignmentTemplateCreateArgs<ExtArgs>>): Prisma__AssignmentTemplateClient<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentTemplates.
     * @param {AssignmentTemplateCreateManyArgs} args - Arguments to create many AssignmentTemplates.
     * @example
     * // Create many AssignmentTemplates
     * const assignmentTemplate = await prisma.assignmentTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentTemplateCreateManyArgs>(args?: SelectSubset<T, AssignmentTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignmentTemplates and returns the data saved in the database.
     * @param {AssignmentTemplateCreateManyAndReturnArgs} args - Arguments to create many AssignmentTemplates.
     * @example
     * // Create many AssignmentTemplates
     * const assignmentTemplate = await prisma.assignmentTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignmentTemplates and only return the `id`
     * const assignmentTemplateWithIdOnly = await prisma.assignmentTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignmentTemplate.
     * @param {AssignmentTemplateDeleteArgs} args - Arguments to delete one AssignmentTemplate.
     * @example
     * // Delete one AssignmentTemplate
     * const AssignmentTemplate = await prisma.assignmentTemplate.delete({
     *   where: {
     *     // ... filter to delete one AssignmentTemplate
     *   }
     * })
     * 
     */
    delete<T extends AssignmentTemplateDeleteArgs>(args: SelectSubset<T, AssignmentTemplateDeleteArgs<ExtArgs>>): Prisma__AssignmentTemplateClient<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentTemplate.
     * @param {AssignmentTemplateUpdateArgs} args - Arguments to update one AssignmentTemplate.
     * @example
     * // Update one AssignmentTemplate
     * const assignmentTemplate = await prisma.assignmentTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentTemplateUpdateArgs>(args: SelectSubset<T, AssignmentTemplateUpdateArgs<ExtArgs>>): Prisma__AssignmentTemplateClient<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentTemplates.
     * @param {AssignmentTemplateDeleteManyArgs} args - Arguments to filter AssignmentTemplates to delete.
     * @example
     * // Delete a few AssignmentTemplates
     * const { count } = await prisma.assignmentTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentTemplateDeleteManyArgs>(args?: SelectSubset<T, AssignmentTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentTemplates
     * const assignmentTemplate = await prisma.assignmentTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentTemplateUpdateManyArgs>(args: SelectSubset<T, AssignmentTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentTemplates and returns the data updated in the database.
     * @param {AssignmentTemplateUpdateManyAndReturnArgs} args - Arguments to update many AssignmentTemplates.
     * @example
     * // Update many AssignmentTemplates
     * const assignmentTemplate = await prisma.assignmentTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignmentTemplates and only return the `id`
     * const assignmentTemplateWithIdOnly = await prisma.assignmentTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignmentTemplate.
     * @param {AssignmentTemplateUpsertArgs} args - Arguments to update or create a AssignmentTemplate.
     * @example
     * // Update or create a AssignmentTemplate
     * const assignmentTemplate = await prisma.assignmentTemplate.upsert({
     *   create: {
     *     // ... data to create a AssignmentTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentTemplate we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentTemplateUpsertArgs>(args: SelectSubset<T, AssignmentTemplateUpsertArgs<ExtArgs>>): Prisma__AssignmentTemplateClient<$Result.GetResult<Prisma.$AssignmentTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignmentTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentTemplateCountArgs} args - Arguments to filter AssignmentTemplates to count.
     * @example
     * // Count the number of AssignmentTemplates
     * const count = await prisma.assignmentTemplate.count({
     *   where: {
     *     // ... the filter for the AssignmentTemplates we want to count
     *   }
     * })
    **/
    count<T extends AssignmentTemplateCountArgs>(
      args?: Subset<T, AssignmentTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentTemplateAggregateArgs>(args: Subset<T, AssignmentTemplateAggregateArgs>): Prisma.PrismaPromise<GetAssignmentTemplateAggregateType<T>>

    /**
     * Group by AssignmentTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentTemplateGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignmentTemplate model
   */
  readonly fields: AssignmentTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignmentTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssignmentTemplate model
   */
  interface AssignmentTemplateFieldRefs {
    readonly id: FieldRef<"AssignmentTemplate", 'Int'>
    readonly key: FieldRef<"AssignmentTemplate", 'String'>
    readonly title: FieldRef<"AssignmentTemplate", 'String'>
    readonly description: FieldRef<"AssignmentTemplate", 'String'>
    readonly configJson: FieldRef<"AssignmentTemplate", 'String'>
    readonly createdAt: FieldRef<"AssignmentTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"AssignmentTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignmentTemplate findUnique
   */
  export type AssignmentTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentTemplate to fetch.
     */
    where: AssignmentTemplateWhereUniqueInput
  }

  /**
   * AssignmentTemplate findUniqueOrThrow
   */
  export type AssignmentTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentTemplate to fetch.
     */
    where: AssignmentTemplateWhereUniqueInput
  }

  /**
   * AssignmentTemplate findFirst
   */
  export type AssignmentTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentTemplate to fetch.
     */
    where?: AssignmentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentTemplates to fetch.
     */
    orderBy?: AssignmentTemplateOrderByWithRelationInput | AssignmentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentTemplates.
     */
    cursor?: AssignmentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentTemplates.
     */
    distinct?: AssignmentTemplateScalarFieldEnum | AssignmentTemplateScalarFieldEnum[]
  }

  /**
   * AssignmentTemplate findFirstOrThrow
   */
  export type AssignmentTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentTemplate to fetch.
     */
    where?: AssignmentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentTemplates to fetch.
     */
    orderBy?: AssignmentTemplateOrderByWithRelationInput | AssignmentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentTemplates.
     */
    cursor?: AssignmentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentTemplates.
     */
    distinct?: AssignmentTemplateScalarFieldEnum | AssignmentTemplateScalarFieldEnum[]
  }

  /**
   * AssignmentTemplate findMany
   */
  export type AssignmentTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentTemplates to fetch.
     */
    where?: AssignmentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentTemplates to fetch.
     */
    orderBy?: AssignmentTemplateOrderByWithRelationInput | AssignmentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignmentTemplates.
     */
    cursor?: AssignmentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentTemplates.
     */
    skip?: number
    distinct?: AssignmentTemplateScalarFieldEnum | AssignmentTemplateScalarFieldEnum[]
  }

  /**
   * AssignmentTemplate create
   */
  export type AssignmentTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a AssignmentTemplate.
     */
    data: XOR<AssignmentTemplateCreateInput, AssignmentTemplateUncheckedCreateInput>
  }

  /**
   * AssignmentTemplate createMany
   */
  export type AssignmentTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignmentTemplates.
     */
    data: AssignmentTemplateCreateManyInput | AssignmentTemplateCreateManyInput[]
  }

  /**
   * AssignmentTemplate createManyAndReturn
   */
  export type AssignmentTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many AssignmentTemplates.
     */
    data: AssignmentTemplateCreateManyInput | AssignmentTemplateCreateManyInput[]
  }

  /**
   * AssignmentTemplate update
   */
  export type AssignmentTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a AssignmentTemplate.
     */
    data: XOR<AssignmentTemplateUpdateInput, AssignmentTemplateUncheckedUpdateInput>
    /**
     * Choose, which AssignmentTemplate to update.
     */
    where: AssignmentTemplateWhereUniqueInput
  }

  /**
   * AssignmentTemplate updateMany
   */
  export type AssignmentTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignmentTemplates.
     */
    data: XOR<AssignmentTemplateUpdateManyMutationInput, AssignmentTemplateUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentTemplates to update
     */
    where?: AssignmentTemplateWhereInput
    /**
     * Limit how many AssignmentTemplates to update.
     */
    limit?: number
  }

  /**
   * AssignmentTemplate updateManyAndReturn
   */
  export type AssignmentTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * The data used to update AssignmentTemplates.
     */
    data: XOR<AssignmentTemplateUpdateManyMutationInput, AssignmentTemplateUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentTemplates to update
     */
    where?: AssignmentTemplateWhereInput
    /**
     * Limit how many AssignmentTemplates to update.
     */
    limit?: number
  }

  /**
   * AssignmentTemplate upsert
   */
  export type AssignmentTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the AssignmentTemplate to update in case it exists.
     */
    where: AssignmentTemplateWhereUniqueInput
    /**
     * In case the AssignmentTemplate found by the `where` argument doesn't exist, create a new AssignmentTemplate with this data.
     */
    create: XOR<AssignmentTemplateCreateInput, AssignmentTemplateUncheckedCreateInput>
    /**
     * In case the AssignmentTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentTemplateUpdateInput, AssignmentTemplateUncheckedUpdateInput>
  }

  /**
   * AssignmentTemplate delete
   */
  export type AssignmentTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
    /**
     * Filter which AssignmentTemplate to delete.
     */
    where: AssignmentTemplateWhereUniqueInput
  }

  /**
   * AssignmentTemplate deleteMany
   */
  export type AssignmentTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentTemplates to delete
     */
    where?: AssignmentTemplateWhereInput
    /**
     * Limit how many AssignmentTemplates to delete.
     */
    limit?: number
  }

  /**
   * AssignmentTemplate without action
   */
  export type AssignmentTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentTemplate
     */
    select?: AssignmentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentTemplate
     */
    omit?: AssignmentTemplateOmit<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    id: number | null
    lessonId: number | null
    maxScore: number | null
    order: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    id: number | null
    lessonId: number | null
    maxScore: number | null
    order: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: number | null
    lessonId: number | null
    title: string | null
    goal: string | null
    instruction: string | null
    taskType: string | null
    answerFormat: string | null
    gradingMode: string | null
    maxScore: number | null
    order: number | null
    isPublished: boolean | null
    configJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: number | null
    lessonId: number | null
    title: string | null
    goal: string | null
    instruction: string | null
    taskType: string | null
    answerFormat: string | null
    gradingMode: string | null
    maxScore: number | null
    order: number | null
    isPublished: boolean | null
    configJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    lessonId: number
    title: number
    goal: number
    instruction: number
    taskType: number
    answerFormat: number
    gradingMode: number
    maxScore: number
    order: number
    isPublished: number
    configJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    id?: true
    lessonId?: true
    maxScore?: true
    order?: true
  }

  export type AssignmentSumAggregateInputType = {
    id?: true
    lessonId?: true
    maxScore?: true
    order?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    goal?: true
    instruction?: true
    taskType?: true
    answerFormat?: true
    gradingMode?: true
    maxScore?: true
    order?: true
    isPublished?: true
    configJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    goal?: true
    instruction?: true
    taskType?: true
    answerFormat?: true
    gradingMode?: true
    maxScore?: true
    order?: true
    isPublished?: true
    configJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    goal?: true
    instruction?: true
    taskType?: true
    answerFormat?: true
    gradingMode?: true
    maxScore?: true
    order?: true
    isPublished?: true
    configJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: number
    lessonId: number
    title: string
    goal: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode: string
    maxScore: number | null
    order: number
    isPublished: boolean
    configJson: string | null
    createdAt: Date
    updatedAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    goal?: boolean
    instruction?: boolean
    taskType?: boolean
    answerFormat?: boolean
    gradingMode?: boolean
    maxScore?: boolean
    order?: boolean
    isPublished?: boolean
    configJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    fields?: boolean | Assignment$fieldsArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    testAnswerFirsts?: boolean | Assignment$testAnswerFirstsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    goal?: boolean
    instruction?: boolean
    taskType?: boolean
    answerFormat?: boolean
    gradingMode?: boolean
    maxScore?: boolean
    order?: boolean
    isPublished?: boolean
    configJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    goal?: boolean
    instruction?: boolean
    taskType?: boolean
    answerFormat?: boolean
    gradingMode?: boolean
    maxScore?: boolean
    order?: boolean
    isPublished?: boolean
    configJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    lessonId?: boolean
    title?: boolean
    goal?: boolean
    instruction?: boolean
    taskType?: boolean
    answerFormat?: boolean
    gradingMode?: boolean
    maxScore?: boolean
    order?: boolean
    isPublished?: boolean
    configJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lessonId" | "title" | "goal" | "instruction" | "taskType" | "answerFormat" | "gradingMode" | "maxScore" | "order" | "isPublished" | "configJson" | "createdAt" | "updatedAt", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    fields?: boolean | Assignment$fieldsArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    testAnswerFirsts?: boolean | Assignment$testAnswerFirstsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>
      fields: Prisma.$AssignmentFieldPayload<ExtArgs>[]
      submissions: Prisma.$AssignmentSubmissionPayload<ExtArgs>[]
      testAnswerFirsts: Prisma.$TestAnswerFirstPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lessonId: number
      title: string
      goal: string | null
      instruction: string
      taskType: string
      answerFormat: string
      gradingMode: string
      maxScore: number | null
      order: number
      isPublished: boolean
      configJson: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fields<T extends Assignment$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Assignment$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testAnswerFirsts<T extends Assignment$testAnswerFirstsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$testAnswerFirstsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'Int'>
    readonly lessonId: FieldRef<"Assignment", 'Int'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly goal: FieldRef<"Assignment", 'String'>
    readonly instruction: FieldRef<"Assignment", 'String'>
    readonly taskType: FieldRef<"Assignment", 'String'>
    readonly answerFormat: FieldRef<"Assignment", 'String'>
    readonly gradingMode: FieldRef<"Assignment", 'String'>
    readonly maxScore: FieldRef<"Assignment", 'Int'>
    readonly order: FieldRef<"Assignment", 'Int'>
    readonly isPublished: FieldRef<"Assignment", 'Boolean'>
    readonly configJson: FieldRef<"Assignment", 'String'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment.fields
   */
  export type Assignment$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    where?: AssignmentFieldWhereInput
    orderBy?: AssignmentFieldOrderByWithRelationInput | AssignmentFieldOrderByWithRelationInput[]
    cursor?: AssignmentFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentFieldScalarFieldEnum | AssignmentFieldScalarFieldEnum[]
  }

  /**
   * Assignment.submissions
   */
  export type Assignment$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    where?: AssignmentSubmissionWhereInput
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    cursor?: AssignmentSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * Assignment.testAnswerFirsts
   */
  export type Assignment$testAnswerFirstsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    where?: TestAnswerFirstWhereInput
    orderBy?: TestAnswerFirstOrderByWithRelationInput | TestAnswerFirstOrderByWithRelationInput[]
    cursor?: TestAnswerFirstWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestAnswerFirstScalarFieldEnum | TestAnswerFirstScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AssignmentField
   */

  export type AggregateAssignmentField = {
    _count: AssignmentFieldCountAggregateOutputType | null
    _avg: AssignmentFieldAvgAggregateOutputType | null
    _sum: AssignmentFieldSumAggregateOutputType | null
    _min: AssignmentFieldMinAggregateOutputType | null
    _max: AssignmentFieldMaxAggregateOutputType | null
  }

  export type AssignmentFieldAvgAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    order: number | null
  }

  export type AssignmentFieldSumAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    order: number | null
  }

  export type AssignmentFieldMinAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    fieldKey: string | null
    label: string | null
    fieldType: string | null
    required: boolean | null
    order: number | null
    optionsJson: string | null
    rulesJson: string | null
  }

  export type AssignmentFieldMaxAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    fieldKey: string | null
    label: string | null
    fieldType: string | null
    required: boolean | null
    order: number | null
    optionsJson: string | null
    rulesJson: string | null
  }

  export type AssignmentFieldCountAggregateOutputType = {
    id: number
    assignmentId: number
    fieldKey: number
    label: number
    fieldType: number
    required: number
    order: number
    optionsJson: number
    rulesJson: number
    _all: number
  }


  export type AssignmentFieldAvgAggregateInputType = {
    id?: true
    assignmentId?: true
    order?: true
  }

  export type AssignmentFieldSumAggregateInputType = {
    id?: true
    assignmentId?: true
    order?: true
  }

  export type AssignmentFieldMinAggregateInputType = {
    id?: true
    assignmentId?: true
    fieldKey?: true
    label?: true
    fieldType?: true
    required?: true
    order?: true
    optionsJson?: true
    rulesJson?: true
  }

  export type AssignmentFieldMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    fieldKey?: true
    label?: true
    fieldType?: true
    required?: true
    order?: true
    optionsJson?: true
    rulesJson?: true
  }

  export type AssignmentFieldCountAggregateInputType = {
    id?: true
    assignmentId?: true
    fieldKey?: true
    label?: true
    fieldType?: true
    required?: true
    order?: true
    optionsJson?: true
    rulesJson?: true
    _all?: true
  }

  export type AssignmentFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentField to aggregate.
     */
    where?: AssignmentFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentFields to fetch.
     */
    orderBy?: AssignmentFieldOrderByWithRelationInput | AssignmentFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignmentFields
    **/
    _count?: true | AssignmentFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentFieldMaxAggregateInputType
  }

  export type GetAssignmentFieldAggregateType<T extends AssignmentFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentField[P]>
      : GetScalarType<T[P], AggregateAssignmentField[P]>
  }




  export type AssignmentFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentFieldWhereInput
    orderBy?: AssignmentFieldOrderByWithAggregationInput | AssignmentFieldOrderByWithAggregationInput[]
    by: AssignmentFieldScalarFieldEnum[] | AssignmentFieldScalarFieldEnum
    having?: AssignmentFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentFieldCountAggregateInputType | true
    _avg?: AssignmentFieldAvgAggregateInputType
    _sum?: AssignmentFieldSumAggregateInputType
    _min?: AssignmentFieldMinAggregateInputType
    _max?: AssignmentFieldMaxAggregateInputType
  }

  export type AssignmentFieldGroupByOutputType = {
    id: number
    assignmentId: number
    fieldKey: string
    label: string
    fieldType: string
    required: boolean
    order: number
    optionsJson: string | null
    rulesJson: string | null
    _count: AssignmentFieldCountAggregateOutputType | null
    _avg: AssignmentFieldAvgAggregateOutputType | null
    _sum: AssignmentFieldSumAggregateOutputType | null
    _min: AssignmentFieldMinAggregateOutputType | null
    _max: AssignmentFieldMaxAggregateOutputType | null
  }

  type GetAssignmentFieldGroupByPayload<T extends AssignmentFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentFieldGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentFieldGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    fieldKey?: boolean
    label?: boolean
    fieldType?: boolean
    required?: boolean
    order?: boolean
    optionsJson?: boolean
    rulesJson?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentField"]>

  export type AssignmentFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    fieldKey?: boolean
    label?: boolean
    fieldType?: boolean
    required?: boolean
    order?: boolean
    optionsJson?: boolean
    rulesJson?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentField"]>

  export type AssignmentFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    fieldKey?: boolean
    label?: boolean
    fieldType?: boolean
    required?: boolean
    order?: boolean
    optionsJson?: boolean
    rulesJson?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentField"]>

  export type AssignmentFieldSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    fieldKey?: boolean
    label?: boolean
    fieldType?: boolean
    required?: boolean
    order?: boolean
    optionsJson?: boolean
    rulesJson?: boolean
  }

  export type AssignmentFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "fieldKey" | "label" | "fieldType" | "required" | "order" | "optionsJson" | "rulesJson", ExtArgs["result"]["assignmentField"]>
  export type AssignmentFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }
  export type AssignmentFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }
  export type AssignmentFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }

  export type $AssignmentFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignmentField"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignmentId: number
      fieldKey: string
      label: string
      fieldType: string
      required: boolean
      order: number
      optionsJson: string | null
      rulesJson: string | null
    }, ExtArgs["result"]["assignmentField"]>
    composites: {}
  }

  type AssignmentFieldGetPayload<S extends boolean | null | undefined | AssignmentFieldDefaultArgs> = $Result.GetResult<Prisma.$AssignmentFieldPayload, S>

  type AssignmentFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentFieldCountAggregateInputType | true
    }

  export interface AssignmentFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignmentField'], meta: { name: 'AssignmentField' } }
    /**
     * Find zero or one AssignmentField that matches the filter.
     * @param {AssignmentFieldFindUniqueArgs} args - Arguments to find a AssignmentField
     * @example
     * // Get one AssignmentField
     * const assignmentField = await prisma.assignmentField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFieldFindUniqueArgs>(args: SelectSubset<T, AssignmentFieldFindUniqueArgs<ExtArgs>>): Prisma__AssignmentFieldClient<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFieldFindUniqueOrThrowArgs} args - Arguments to find a AssignmentField
     * @example
     * // Get one AssignmentField
     * const assignmentField = await prisma.assignmentField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentFieldClient<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFieldFindFirstArgs} args - Arguments to find a AssignmentField
     * @example
     * // Get one AssignmentField
     * const assignmentField = await prisma.assignmentField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFieldFindFirstArgs>(args?: SelectSubset<T, AssignmentFieldFindFirstArgs<ExtArgs>>): Prisma__AssignmentFieldClient<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFieldFindFirstOrThrowArgs} args - Arguments to find a AssignmentField
     * @example
     * // Get one AssignmentField
     * const assignmentField = await prisma.assignmentField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentFieldClient<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentFields
     * const assignmentFields = await prisma.assignmentField.findMany()
     * 
     * // Get first 10 AssignmentFields
     * const assignmentFields = await prisma.assignmentField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentFieldWithIdOnly = await prisma.assignmentField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFieldFindManyArgs>(args?: SelectSubset<T, AssignmentFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentField.
     * @param {AssignmentFieldCreateArgs} args - Arguments to create a AssignmentField.
     * @example
     * // Create one AssignmentField
     * const AssignmentField = await prisma.assignmentField.create({
     *   data: {
     *     // ... data to create a AssignmentField
     *   }
     * })
     * 
     */
    create<T extends AssignmentFieldCreateArgs>(args: SelectSubset<T, AssignmentFieldCreateArgs<ExtArgs>>): Prisma__AssignmentFieldClient<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentFields.
     * @param {AssignmentFieldCreateManyArgs} args - Arguments to create many AssignmentFields.
     * @example
     * // Create many AssignmentFields
     * const assignmentField = await prisma.assignmentField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentFieldCreateManyArgs>(args?: SelectSubset<T, AssignmentFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignmentFields and returns the data saved in the database.
     * @param {AssignmentFieldCreateManyAndReturnArgs} args - Arguments to create many AssignmentFields.
     * @example
     * // Create many AssignmentFields
     * const assignmentField = await prisma.assignmentField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignmentFields and only return the `id`
     * const assignmentFieldWithIdOnly = await prisma.assignmentField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignmentField.
     * @param {AssignmentFieldDeleteArgs} args - Arguments to delete one AssignmentField.
     * @example
     * // Delete one AssignmentField
     * const AssignmentField = await prisma.assignmentField.delete({
     *   where: {
     *     // ... filter to delete one AssignmentField
     *   }
     * })
     * 
     */
    delete<T extends AssignmentFieldDeleteArgs>(args: SelectSubset<T, AssignmentFieldDeleteArgs<ExtArgs>>): Prisma__AssignmentFieldClient<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentField.
     * @param {AssignmentFieldUpdateArgs} args - Arguments to update one AssignmentField.
     * @example
     * // Update one AssignmentField
     * const assignmentField = await prisma.assignmentField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentFieldUpdateArgs>(args: SelectSubset<T, AssignmentFieldUpdateArgs<ExtArgs>>): Prisma__AssignmentFieldClient<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentFields.
     * @param {AssignmentFieldDeleteManyArgs} args - Arguments to filter AssignmentFields to delete.
     * @example
     * // Delete a few AssignmentFields
     * const { count } = await prisma.assignmentField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentFieldDeleteManyArgs>(args?: SelectSubset<T, AssignmentFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentFields
     * const assignmentField = await prisma.assignmentField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentFieldUpdateManyArgs>(args: SelectSubset<T, AssignmentFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentFields and returns the data updated in the database.
     * @param {AssignmentFieldUpdateManyAndReturnArgs} args - Arguments to update many AssignmentFields.
     * @example
     * // Update many AssignmentFields
     * const assignmentField = await prisma.assignmentField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignmentFields and only return the `id`
     * const assignmentFieldWithIdOnly = await prisma.assignmentField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignmentField.
     * @param {AssignmentFieldUpsertArgs} args - Arguments to update or create a AssignmentField.
     * @example
     * // Update or create a AssignmentField
     * const assignmentField = await prisma.assignmentField.upsert({
     *   create: {
     *     // ... data to create a AssignmentField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentField we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentFieldUpsertArgs>(args: SelectSubset<T, AssignmentFieldUpsertArgs<ExtArgs>>): Prisma__AssignmentFieldClient<$Result.GetResult<Prisma.$AssignmentFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignmentFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFieldCountArgs} args - Arguments to filter AssignmentFields to count.
     * @example
     * // Count the number of AssignmentFields
     * const count = await prisma.assignmentField.count({
     *   where: {
     *     // ... the filter for the AssignmentFields we want to count
     *   }
     * })
    **/
    count<T extends AssignmentFieldCountArgs>(
      args?: Subset<T, AssignmentFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentFieldAggregateArgs>(args: Subset<T, AssignmentFieldAggregateArgs>): Prisma.PrismaPromise<GetAssignmentFieldAggregateType<T>>

    /**
     * Group by AssignmentField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentFieldGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignmentField model
   */
  readonly fields: AssignmentFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignmentField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssignmentField model
   */
  interface AssignmentFieldFieldRefs {
    readonly id: FieldRef<"AssignmentField", 'Int'>
    readonly assignmentId: FieldRef<"AssignmentField", 'Int'>
    readonly fieldKey: FieldRef<"AssignmentField", 'String'>
    readonly label: FieldRef<"AssignmentField", 'String'>
    readonly fieldType: FieldRef<"AssignmentField", 'String'>
    readonly required: FieldRef<"AssignmentField", 'Boolean'>
    readonly order: FieldRef<"AssignmentField", 'Int'>
    readonly optionsJson: FieldRef<"AssignmentField", 'String'>
    readonly rulesJson: FieldRef<"AssignmentField", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AssignmentField findUnique
   */
  export type AssignmentFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentField to fetch.
     */
    where: AssignmentFieldWhereUniqueInput
  }

  /**
   * AssignmentField findUniqueOrThrow
   */
  export type AssignmentFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentField to fetch.
     */
    where: AssignmentFieldWhereUniqueInput
  }

  /**
   * AssignmentField findFirst
   */
  export type AssignmentFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentField to fetch.
     */
    where?: AssignmentFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentFields to fetch.
     */
    orderBy?: AssignmentFieldOrderByWithRelationInput | AssignmentFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentFields.
     */
    cursor?: AssignmentFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentFields.
     */
    distinct?: AssignmentFieldScalarFieldEnum | AssignmentFieldScalarFieldEnum[]
  }

  /**
   * AssignmentField findFirstOrThrow
   */
  export type AssignmentFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentField to fetch.
     */
    where?: AssignmentFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentFields to fetch.
     */
    orderBy?: AssignmentFieldOrderByWithRelationInput | AssignmentFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentFields.
     */
    cursor?: AssignmentFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentFields.
     */
    distinct?: AssignmentFieldScalarFieldEnum | AssignmentFieldScalarFieldEnum[]
  }

  /**
   * AssignmentField findMany
   */
  export type AssignmentFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentFields to fetch.
     */
    where?: AssignmentFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentFields to fetch.
     */
    orderBy?: AssignmentFieldOrderByWithRelationInput | AssignmentFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignmentFields.
     */
    cursor?: AssignmentFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentFields.
     */
    skip?: number
    distinct?: AssignmentFieldScalarFieldEnum | AssignmentFieldScalarFieldEnum[]
  }

  /**
   * AssignmentField create
   */
  export type AssignmentFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a AssignmentField.
     */
    data: XOR<AssignmentFieldCreateInput, AssignmentFieldUncheckedCreateInput>
  }

  /**
   * AssignmentField createMany
   */
  export type AssignmentFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignmentFields.
     */
    data: AssignmentFieldCreateManyInput | AssignmentFieldCreateManyInput[]
  }

  /**
   * AssignmentField createManyAndReturn
   */
  export type AssignmentFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * The data used to create many AssignmentFields.
     */
    data: AssignmentFieldCreateManyInput | AssignmentFieldCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignmentField update
   */
  export type AssignmentFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a AssignmentField.
     */
    data: XOR<AssignmentFieldUpdateInput, AssignmentFieldUncheckedUpdateInput>
    /**
     * Choose, which AssignmentField to update.
     */
    where: AssignmentFieldWhereUniqueInput
  }

  /**
   * AssignmentField updateMany
   */
  export type AssignmentFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignmentFields.
     */
    data: XOR<AssignmentFieldUpdateManyMutationInput, AssignmentFieldUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentFields to update
     */
    where?: AssignmentFieldWhereInput
    /**
     * Limit how many AssignmentFields to update.
     */
    limit?: number
  }

  /**
   * AssignmentField updateManyAndReturn
   */
  export type AssignmentFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * The data used to update AssignmentFields.
     */
    data: XOR<AssignmentFieldUpdateManyMutationInput, AssignmentFieldUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentFields to update
     */
    where?: AssignmentFieldWhereInput
    /**
     * Limit how many AssignmentFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignmentField upsert
   */
  export type AssignmentFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the AssignmentField to update in case it exists.
     */
    where: AssignmentFieldWhereUniqueInput
    /**
     * In case the AssignmentField found by the `where` argument doesn't exist, create a new AssignmentField with this data.
     */
    create: XOR<AssignmentFieldCreateInput, AssignmentFieldUncheckedCreateInput>
    /**
     * In case the AssignmentField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentFieldUpdateInput, AssignmentFieldUncheckedUpdateInput>
  }

  /**
   * AssignmentField delete
   */
  export type AssignmentFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
    /**
     * Filter which AssignmentField to delete.
     */
    where: AssignmentFieldWhereUniqueInput
  }

  /**
   * AssignmentField deleteMany
   */
  export type AssignmentFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentFields to delete
     */
    where?: AssignmentFieldWhereInput
    /**
     * Limit how many AssignmentFields to delete.
     */
    limit?: number
  }

  /**
   * AssignmentField without action
   */
  export type AssignmentFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentField
     */
    select?: AssignmentFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentField
     */
    omit?: AssignmentFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentFieldInclude<ExtArgs> | null
  }


  /**
   * Model AssignmentSubmission
   */

  export type AggregateAssignmentSubmission = {
    _count: AssignmentSubmissionCountAggregateOutputType | null
    _avg: AssignmentSubmissionAvgAggregateOutputType | null
    _sum: AssignmentSubmissionSumAggregateOutputType | null
    _min: AssignmentSubmissionMinAggregateOutputType | null
    _max: AssignmentSubmissionMaxAggregateOutputType | null
  }

  export type AssignmentSubmissionAvgAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    studentId: number | null
    score: number | null
  }

  export type AssignmentSubmissionSumAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    studentId: number | null
    score: number | null
  }

  export type AssignmentSubmissionMinAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    studentId: number | null
    status: string | null
    answersJson: string | null
    score: number | null
    gradingJson: string | null
    feedback: string | null
    submittedAt: Date | null
    checkedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentSubmissionMaxAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    studentId: number | null
    status: string | null
    answersJson: string | null
    score: number | null
    gradingJson: string | null
    feedback: string | null
    submittedAt: Date | null
    checkedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentSubmissionCountAggregateOutputType = {
    id: number
    assignmentId: number
    studentId: number
    status: number
    answersJson: number
    score: number
    gradingJson: number
    feedback: number
    submittedAt: number
    checkedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssignmentSubmissionAvgAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    score?: true
  }

  export type AssignmentSubmissionSumAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    score?: true
  }

  export type AssignmentSubmissionMinAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    status?: true
    answersJson?: true
    score?: true
    gradingJson?: true
    feedback?: true
    submittedAt?: true
    checkedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentSubmissionMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    status?: true
    answersJson?: true
    score?: true
    gradingJson?: true
    feedback?: true
    submittedAt?: true
    checkedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentSubmissionCountAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    status?: true
    answersJson?: true
    score?: true
    gradingJson?: true
    feedback?: true
    submittedAt?: true
    checkedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssignmentSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentSubmission to aggregate.
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSubmissions to fetch.
     */
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignmentSubmissions
    **/
    _count?: true | AssignmentSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentSubmissionMaxAggregateInputType
  }

  export type GetAssignmentSubmissionAggregateType<T extends AssignmentSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentSubmission[P]>
      : GetScalarType<T[P], AggregateAssignmentSubmission[P]>
  }




  export type AssignmentSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentSubmissionWhereInput
    orderBy?: AssignmentSubmissionOrderByWithAggregationInput | AssignmentSubmissionOrderByWithAggregationInput[]
    by: AssignmentSubmissionScalarFieldEnum[] | AssignmentSubmissionScalarFieldEnum
    having?: AssignmentSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentSubmissionCountAggregateInputType | true
    _avg?: AssignmentSubmissionAvgAggregateInputType
    _sum?: AssignmentSubmissionSumAggregateInputType
    _min?: AssignmentSubmissionMinAggregateInputType
    _max?: AssignmentSubmissionMaxAggregateInputType
  }

  export type AssignmentSubmissionGroupByOutputType = {
    id: number
    assignmentId: number
    studentId: number
    status: string
    answersJson: string
    score: number | null
    gradingJson: string | null
    feedback: string | null
    submittedAt: Date | null
    checkedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AssignmentSubmissionCountAggregateOutputType | null
    _avg: AssignmentSubmissionAvgAggregateOutputType | null
    _sum: AssignmentSubmissionSumAggregateOutputType | null
    _min: AssignmentSubmissionMinAggregateOutputType | null
    _max: AssignmentSubmissionMaxAggregateOutputType | null
  }

  type GetAssignmentSubmissionGroupByPayload<T extends AssignmentSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    status?: boolean
    answersJson?: boolean
    score?: boolean
    gradingJson?: boolean
    feedback?: boolean
    submittedAt?: boolean
    checkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentSubmission"]>

  export type AssignmentSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    status?: boolean
    answersJson?: boolean
    score?: boolean
    gradingJson?: boolean
    feedback?: boolean
    submittedAt?: boolean
    checkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentSubmission"]>

  export type AssignmentSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    status?: boolean
    answersJson?: boolean
    score?: boolean
    gradingJson?: boolean
    feedback?: boolean
    submittedAt?: boolean
    checkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentSubmission"]>

  export type AssignmentSubmissionSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    status?: boolean
    answersJson?: boolean
    score?: boolean
    gradingJson?: boolean
    feedback?: boolean
    submittedAt?: boolean
    checkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssignmentSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "studentId" | "status" | "answersJson" | "score" | "gradingJson" | "feedback" | "submittedAt" | "checkedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["assignmentSubmission"]>
  export type AssignmentSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AssignmentSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AssignmentSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $AssignmentSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignmentSubmission"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignmentId: number
      studentId: number
      status: string
      answersJson: string
      score: number | null
      gradingJson: string | null
      feedback: string | null
      submittedAt: Date | null
      checkedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assignmentSubmission"]>
    composites: {}
  }

  type AssignmentSubmissionGetPayload<S extends boolean | null | undefined | AssignmentSubmissionDefaultArgs> = $Result.GetResult<Prisma.$AssignmentSubmissionPayload, S>

  type AssignmentSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentSubmissionCountAggregateInputType | true
    }

  export interface AssignmentSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignmentSubmission'], meta: { name: 'AssignmentSubmission' } }
    /**
     * Find zero or one AssignmentSubmission that matches the filter.
     * @param {AssignmentSubmissionFindUniqueArgs} args - Arguments to find a AssignmentSubmission
     * @example
     * // Get one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentSubmissionFindUniqueArgs>(args: SelectSubset<T, AssignmentSubmissionFindUniqueArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentSubmissionFindUniqueOrThrowArgs} args - Arguments to find a AssignmentSubmission
     * @example
     * // Get one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionFindFirstArgs} args - Arguments to find a AssignmentSubmission
     * @example
     * // Get one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentSubmissionFindFirstArgs>(args?: SelectSubset<T, AssignmentSubmissionFindFirstArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionFindFirstOrThrowArgs} args - Arguments to find a AssignmentSubmission
     * @example
     * // Get one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentSubmissions
     * const assignmentSubmissions = await prisma.assignmentSubmission.findMany()
     * 
     * // Get first 10 AssignmentSubmissions
     * const assignmentSubmissions = await prisma.assignmentSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentSubmissionWithIdOnly = await prisma.assignmentSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentSubmissionFindManyArgs>(args?: SelectSubset<T, AssignmentSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentSubmission.
     * @param {AssignmentSubmissionCreateArgs} args - Arguments to create a AssignmentSubmission.
     * @example
     * // Create one AssignmentSubmission
     * const AssignmentSubmission = await prisma.assignmentSubmission.create({
     *   data: {
     *     // ... data to create a AssignmentSubmission
     *   }
     * })
     * 
     */
    create<T extends AssignmentSubmissionCreateArgs>(args: SelectSubset<T, AssignmentSubmissionCreateArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentSubmissions.
     * @param {AssignmentSubmissionCreateManyArgs} args - Arguments to create many AssignmentSubmissions.
     * @example
     * // Create many AssignmentSubmissions
     * const assignmentSubmission = await prisma.assignmentSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentSubmissionCreateManyArgs>(args?: SelectSubset<T, AssignmentSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignmentSubmissions and returns the data saved in the database.
     * @param {AssignmentSubmissionCreateManyAndReturnArgs} args - Arguments to create many AssignmentSubmissions.
     * @example
     * // Create many AssignmentSubmissions
     * const assignmentSubmission = await prisma.assignmentSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignmentSubmissions and only return the `id`
     * const assignmentSubmissionWithIdOnly = await prisma.assignmentSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignmentSubmission.
     * @param {AssignmentSubmissionDeleteArgs} args - Arguments to delete one AssignmentSubmission.
     * @example
     * // Delete one AssignmentSubmission
     * const AssignmentSubmission = await prisma.assignmentSubmission.delete({
     *   where: {
     *     // ... filter to delete one AssignmentSubmission
     *   }
     * })
     * 
     */
    delete<T extends AssignmentSubmissionDeleteArgs>(args: SelectSubset<T, AssignmentSubmissionDeleteArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentSubmission.
     * @param {AssignmentSubmissionUpdateArgs} args - Arguments to update one AssignmentSubmission.
     * @example
     * // Update one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentSubmissionUpdateArgs>(args: SelectSubset<T, AssignmentSubmissionUpdateArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentSubmissions.
     * @param {AssignmentSubmissionDeleteManyArgs} args - Arguments to filter AssignmentSubmissions to delete.
     * @example
     * // Delete a few AssignmentSubmissions
     * const { count } = await prisma.assignmentSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentSubmissionDeleteManyArgs>(args?: SelectSubset<T, AssignmentSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentSubmissions
     * const assignmentSubmission = await prisma.assignmentSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentSubmissionUpdateManyArgs>(args: SelectSubset<T, AssignmentSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentSubmissions and returns the data updated in the database.
     * @param {AssignmentSubmissionUpdateManyAndReturnArgs} args - Arguments to update many AssignmentSubmissions.
     * @example
     * // Update many AssignmentSubmissions
     * const assignmentSubmission = await prisma.assignmentSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignmentSubmissions and only return the `id`
     * const assignmentSubmissionWithIdOnly = await prisma.assignmentSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignmentSubmission.
     * @param {AssignmentSubmissionUpsertArgs} args - Arguments to update or create a AssignmentSubmission.
     * @example
     * // Update or create a AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.upsert({
     *   create: {
     *     // ... data to create a AssignmentSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentSubmission we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentSubmissionUpsertArgs>(args: SelectSubset<T, AssignmentSubmissionUpsertArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignmentSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionCountArgs} args - Arguments to filter AssignmentSubmissions to count.
     * @example
     * // Count the number of AssignmentSubmissions
     * const count = await prisma.assignmentSubmission.count({
     *   where: {
     *     // ... the filter for the AssignmentSubmissions we want to count
     *   }
     * })
    **/
    count<T extends AssignmentSubmissionCountArgs>(
      args?: Subset<T, AssignmentSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentSubmissionAggregateArgs>(args: Subset<T, AssignmentSubmissionAggregateArgs>): Prisma.PrismaPromise<GetAssignmentSubmissionAggregateType<T>>

    /**
     * Group by AssignmentSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignmentSubmission model
   */
  readonly fields: AssignmentSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignmentSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssignmentSubmission model
   */
  interface AssignmentSubmissionFieldRefs {
    readonly id: FieldRef<"AssignmentSubmission", 'Int'>
    readonly assignmentId: FieldRef<"AssignmentSubmission", 'Int'>
    readonly studentId: FieldRef<"AssignmentSubmission", 'Int'>
    readonly status: FieldRef<"AssignmentSubmission", 'String'>
    readonly answersJson: FieldRef<"AssignmentSubmission", 'String'>
    readonly score: FieldRef<"AssignmentSubmission", 'Int'>
    readonly gradingJson: FieldRef<"AssignmentSubmission", 'String'>
    readonly feedback: FieldRef<"AssignmentSubmission", 'String'>
    readonly submittedAt: FieldRef<"AssignmentSubmission", 'DateTime'>
    readonly checkedAt: FieldRef<"AssignmentSubmission", 'DateTime'>
    readonly createdAt: FieldRef<"AssignmentSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"AssignmentSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignmentSubmission findUnique
   */
  export type AssignmentSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmission to fetch.
     */
    where: AssignmentSubmissionWhereUniqueInput
  }

  /**
   * AssignmentSubmission findUniqueOrThrow
   */
  export type AssignmentSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmission to fetch.
     */
    where: AssignmentSubmissionWhereUniqueInput
  }

  /**
   * AssignmentSubmission findFirst
   */
  export type AssignmentSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmission to fetch.
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSubmissions to fetch.
     */
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentSubmissions.
     */
    cursor?: AssignmentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentSubmissions.
     */
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * AssignmentSubmission findFirstOrThrow
   */
  export type AssignmentSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmission to fetch.
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSubmissions to fetch.
     */
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentSubmissions.
     */
    cursor?: AssignmentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentSubmissions.
     */
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * AssignmentSubmission findMany
   */
  export type AssignmentSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmissions to fetch.
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSubmissions to fetch.
     */
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignmentSubmissions.
     */
    cursor?: AssignmentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSubmissions.
     */
    skip?: number
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * AssignmentSubmission create
   */
  export type AssignmentSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a AssignmentSubmission.
     */
    data: XOR<AssignmentSubmissionCreateInput, AssignmentSubmissionUncheckedCreateInput>
  }

  /**
   * AssignmentSubmission createMany
   */
  export type AssignmentSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignmentSubmissions.
     */
    data: AssignmentSubmissionCreateManyInput | AssignmentSubmissionCreateManyInput[]
  }

  /**
   * AssignmentSubmission createManyAndReturn
   */
  export type AssignmentSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many AssignmentSubmissions.
     */
    data: AssignmentSubmissionCreateManyInput | AssignmentSubmissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignmentSubmission update
   */
  export type AssignmentSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a AssignmentSubmission.
     */
    data: XOR<AssignmentSubmissionUpdateInput, AssignmentSubmissionUncheckedUpdateInput>
    /**
     * Choose, which AssignmentSubmission to update.
     */
    where: AssignmentSubmissionWhereUniqueInput
  }

  /**
   * AssignmentSubmission updateMany
   */
  export type AssignmentSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignmentSubmissions.
     */
    data: XOR<AssignmentSubmissionUpdateManyMutationInput, AssignmentSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentSubmissions to update
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * Limit how many AssignmentSubmissions to update.
     */
    limit?: number
  }

  /**
   * AssignmentSubmission updateManyAndReturn
   */
  export type AssignmentSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update AssignmentSubmissions.
     */
    data: XOR<AssignmentSubmissionUpdateManyMutationInput, AssignmentSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentSubmissions to update
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * Limit how many AssignmentSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignmentSubmission upsert
   */
  export type AssignmentSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the AssignmentSubmission to update in case it exists.
     */
    where: AssignmentSubmissionWhereUniqueInput
    /**
     * In case the AssignmentSubmission found by the `where` argument doesn't exist, create a new AssignmentSubmission with this data.
     */
    create: XOR<AssignmentSubmissionCreateInput, AssignmentSubmissionUncheckedCreateInput>
    /**
     * In case the AssignmentSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentSubmissionUpdateInput, AssignmentSubmissionUncheckedUpdateInput>
  }

  /**
   * AssignmentSubmission delete
   */
  export type AssignmentSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter which AssignmentSubmission to delete.
     */
    where: AssignmentSubmissionWhereUniqueInput
  }

  /**
   * AssignmentSubmission deleteMany
   */
  export type AssignmentSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentSubmissions to delete
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * Limit how many AssignmentSubmissions to delete.
     */
    limit?: number
  }

  /**
   * AssignmentSubmission without action
   */
  export type AssignmentSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model TestAnswerFirst
   */

  export type AggregateTestAnswerFirst = {
    _count: TestAnswerFirstCountAggregateOutputType | null
    _avg: TestAnswerFirstAvgAggregateOutputType | null
    _sum: TestAnswerFirstSumAggregateOutputType | null
    _min: TestAnswerFirstMinAggregateOutputType | null
    _max: TestAnswerFirstMaxAggregateOutputType | null
  }

  export type TestAnswerFirstAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    assignmentId: number | null
  }

  export type TestAnswerFirstSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    assignmentId: number | null
  }

  export type TestAnswerFirstMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    assignmentId: number | null
    blockId: string | null
    optionKey: string | null
    createdAt: Date | null
  }

  export type TestAnswerFirstMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    assignmentId: number | null
    blockId: string | null
    optionKey: string | null
    createdAt: Date | null
  }

  export type TestAnswerFirstCountAggregateOutputType = {
    id: number
    studentId: number
    assignmentId: number
    blockId: number
    optionKey: number
    createdAt: number
    _all: number
  }


  export type TestAnswerFirstAvgAggregateInputType = {
    id?: true
    studentId?: true
    assignmentId?: true
  }

  export type TestAnswerFirstSumAggregateInputType = {
    id?: true
    studentId?: true
    assignmentId?: true
  }

  export type TestAnswerFirstMinAggregateInputType = {
    id?: true
    studentId?: true
    assignmentId?: true
    blockId?: true
    optionKey?: true
    createdAt?: true
  }

  export type TestAnswerFirstMaxAggregateInputType = {
    id?: true
    studentId?: true
    assignmentId?: true
    blockId?: true
    optionKey?: true
    createdAt?: true
  }

  export type TestAnswerFirstCountAggregateInputType = {
    id?: true
    studentId?: true
    assignmentId?: true
    blockId?: true
    optionKey?: true
    createdAt?: true
    _all?: true
  }

  export type TestAnswerFirstAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAnswerFirst to aggregate.
     */
    where?: TestAnswerFirstWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswerFirsts to fetch.
     */
    orderBy?: TestAnswerFirstOrderByWithRelationInput | TestAnswerFirstOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestAnswerFirstWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswerFirsts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswerFirsts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestAnswerFirsts
    **/
    _count?: true | TestAnswerFirstCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAnswerFirstAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestAnswerFirstSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestAnswerFirstMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestAnswerFirstMaxAggregateInputType
  }

  export type GetTestAnswerFirstAggregateType<T extends TestAnswerFirstAggregateArgs> = {
        [P in keyof T & keyof AggregateTestAnswerFirst]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestAnswerFirst[P]>
      : GetScalarType<T[P], AggregateTestAnswerFirst[P]>
  }




  export type TestAnswerFirstGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAnswerFirstWhereInput
    orderBy?: TestAnswerFirstOrderByWithAggregationInput | TestAnswerFirstOrderByWithAggregationInput[]
    by: TestAnswerFirstScalarFieldEnum[] | TestAnswerFirstScalarFieldEnum
    having?: TestAnswerFirstScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestAnswerFirstCountAggregateInputType | true
    _avg?: TestAnswerFirstAvgAggregateInputType
    _sum?: TestAnswerFirstSumAggregateInputType
    _min?: TestAnswerFirstMinAggregateInputType
    _max?: TestAnswerFirstMaxAggregateInputType
  }

  export type TestAnswerFirstGroupByOutputType = {
    id: number
    studentId: number
    assignmentId: number
    blockId: string
    optionKey: string
    createdAt: Date
    _count: TestAnswerFirstCountAggregateOutputType | null
    _avg: TestAnswerFirstAvgAggregateOutputType | null
    _sum: TestAnswerFirstSumAggregateOutputType | null
    _min: TestAnswerFirstMinAggregateOutputType | null
    _max: TestAnswerFirstMaxAggregateOutputType | null
  }

  type GetTestAnswerFirstGroupByPayload<T extends TestAnswerFirstGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestAnswerFirstGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestAnswerFirstGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestAnswerFirstGroupByOutputType[P]>
            : GetScalarType<T[P], TestAnswerFirstGroupByOutputType[P]>
        }
      >
    >


  export type TestAnswerFirstSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    assignmentId?: boolean
    blockId?: boolean
    optionKey?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testAnswerFirst"]>

  export type TestAnswerFirstSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    assignmentId?: boolean
    blockId?: boolean
    optionKey?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testAnswerFirst"]>

  export type TestAnswerFirstSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    assignmentId?: boolean
    blockId?: boolean
    optionKey?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testAnswerFirst"]>

  export type TestAnswerFirstSelectScalar = {
    id?: boolean
    studentId?: boolean
    assignmentId?: boolean
    blockId?: boolean
    optionKey?: boolean
    createdAt?: boolean
  }

  export type TestAnswerFirstOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "assignmentId" | "blockId" | "optionKey" | "createdAt", ExtArgs["result"]["testAnswerFirst"]>
  export type TestAnswerFirstInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }
  export type TestAnswerFirstIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }
  export type TestAnswerFirstIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }

  export type $TestAnswerFirstPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestAnswerFirst"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      assignment: Prisma.$AssignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      assignmentId: number
      blockId: string
      optionKey: string
      createdAt: Date
    }, ExtArgs["result"]["testAnswerFirst"]>
    composites: {}
  }

  type TestAnswerFirstGetPayload<S extends boolean | null | undefined | TestAnswerFirstDefaultArgs> = $Result.GetResult<Prisma.$TestAnswerFirstPayload, S>

  type TestAnswerFirstCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestAnswerFirstFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestAnswerFirstCountAggregateInputType | true
    }

  export interface TestAnswerFirstDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestAnswerFirst'], meta: { name: 'TestAnswerFirst' } }
    /**
     * Find zero or one TestAnswerFirst that matches the filter.
     * @param {TestAnswerFirstFindUniqueArgs} args - Arguments to find a TestAnswerFirst
     * @example
     * // Get one TestAnswerFirst
     * const testAnswerFirst = await prisma.testAnswerFirst.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestAnswerFirstFindUniqueArgs>(args: SelectSubset<T, TestAnswerFirstFindUniqueArgs<ExtArgs>>): Prisma__TestAnswerFirstClient<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestAnswerFirst that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestAnswerFirstFindUniqueOrThrowArgs} args - Arguments to find a TestAnswerFirst
     * @example
     * // Get one TestAnswerFirst
     * const testAnswerFirst = await prisma.testAnswerFirst.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestAnswerFirstFindUniqueOrThrowArgs>(args: SelectSubset<T, TestAnswerFirstFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestAnswerFirstClient<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestAnswerFirst that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFirstFindFirstArgs} args - Arguments to find a TestAnswerFirst
     * @example
     * // Get one TestAnswerFirst
     * const testAnswerFirst = await prisma.testAnswerFirst.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestAnswerFirstFindFirstArgs>(args?: SelectSubset<T, TestAnswerFirstFindFirstArgs<ExtArgs>>): Prisma__TestAnswerFirstClient<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestAnswerFirst that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFirstFindFirstOrThrowArgs} args - Arguments to find a TestAnswerFirst
     * @example
     * // Get one TestAnswerFirst
     * const testAnswerFirst = await prisma.testAnswerFirst.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestAnswerFirstFindFirstOrThrowArgs>(args?: SelectSubset<T, TestAnswerFirstFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestAnswerFirstClient<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestAnswerFirsts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFirstFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestAnswerFirsts
     * const testAnswerFirsts = await prisma.testAnswerFirst.findMany()
     * 
     * // Get first 10 TestAnswerFirsts
     * const testAnswerFirsts = await prisma.testAnswerFirst.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testAnswerFirstWithIdOnly = await prisma.testAnswerFirst.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestAnswerFirstFindManyArgs>(args?: SelectSubset<T, TestAnswerFirstFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestAnswerFirst.
     * @param {TestAnswerFirstCreateArgs} args - Arguments to create a TestAnswerFirst.
     * @example
     * // Create one TestAnswerFirst
     * const TestAnswerFirst = await prisma.testAnswerFirst.create({
     *   data: {
     *     // ... data to create a TestAnswerFirst
     *   }
     * })
     * 
     */
    create<T extends TestAnswerFirstCreateArgs>(args: SelectSubset<T, TestAnswerFirstCreateArgs<ExtArgs>>): Prisma__TestAnswerFirstClient<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestAnswerFirsts.
     * @param {TestAnswerFirstCreateManyArgs} args - Arguments to create many TestAnswerFirsts.
     * @example
     * // Create many TestAnswerFirsts
     * const testAnswerFirst = await prisma.testAnswerFirst.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestAnswerFirstCreateManyArgs>(args?: SelectSubset<T, TestAnswerFirstCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestAnswerFirsts and returns the data saved in the database.
     * @param {TestAnswerFirstCreateManyAndReturnArgs} args - Arguments to create many TestAnswerFirsts.
     * @example
     * // Create many TestAnswerFirsts
     * const testAnswerFirst = await prisma.testAnswerFirst.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestAnswerFirsts and only return the `id`
     * const testAnswerFirstWithIdOnly = await prisma.testAnswerFirst.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestAnswerFirstCreateManyAndReturnArgs>(args?: SelectSubset<T, TestAnswerFirstCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestAnswerFirst.
     * @param {TestAnswerFirstDeleteArgs} args - Arguments to delete one TestAnswerFirst.
     * @example
     * // Delete one TestAnswerFirst
     * const TestAnswerFirst = await prisma.testAnswerFirst.delete({
     *   where: {
     *     // ... filter to delete one TestAnswerFirst
     *   }
     * })
     * 
     */
    delete<T extends TestAnswerFirstDeleteArgs>(args: SelectSubset<T, TestAnswerFirstDeleteArgs<ExtArgs>>): Prisma__TestAnswerFirstClient<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestAnswerFirst.
     * @param {TestAnswerFirstUpdateArgs} args - Arguments to update one TestAnswerFirst.
     * @example
     * // Update one TestAnswerFirst
     * const testAnswerFirst = await prisma.testAnswerFirst.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestAnswerFirstUpdateArgs>(args: SelectSubset<T, TestAnswerFirstUpdateArgs<ExtArgs>>): Prisma__TestAnswerFirstClient<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestAnswerFirsts.
     * @param {TestAnswerFirstDeleteManyArgs} args - Arguments to filter TestAnswerFirsts to delete.
     * @example
     * // Delete a few TestAnswerFirsts
     * const { count } = await prisma.testAnswerFirst.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestAnswerFirstDeleteManyArgs>(args?: SelectSubset<T, TestAnswerFirstDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestAnswerFirsts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFirstUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestAnswerFirsts
     * const testAnswerFirst = await prisma.testAnswerFirst.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestAnswerFirstUpdateManyArgs>(args: SelectSubset<T, TestAnswerFirstUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestAnswerFirsts and returns the data updated in the database.
     * @param {TestAnswerFirstUpdateManyAndReturnArgs} args - Arguments to update many TestAnswerFirsts.
     * @example
     * // Update many TestAnswerFirsts
     * const testAnswerFirst = await prisma.testAnswerFirst.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestAnswerFirsts and only return the `id`
     * const testAnswerFirstWithIdOnly = await prisma.testAnswerFirst.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestAnswerFirstUpdateManyAndReturnArgs>(args: SelectSubset<T, TestAnswerFirstUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestAnswerFirst.
     * @param {TestAnswerFirstUpsertArgs} args - Arguments to update or create a TestAnswerFirst.
     * @example
     * // Update or create a TestAnswerFirst
     * const testAnswerFirst = await prisma.testAnswerFirst.upsert({
     *   create: {
     *     // ... data to create a TestAnswerFirst
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestAnswerFirst we want to update
     *   }
     * })
     */
    upsert<T extends TestAnswerFirstUpsertArgs>(args: SelectSubset<T, TestAnswerFirstUpsertArgs<ExtArgs>>): Prisma__TestAnswerFirstClient<$Result.GetResult<Prisma.$TestAnswerFirstPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestAnswerFirsts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFirstCountArgs} args - Arguments to filter TestAnswerFirsts to count.
     * @example
     * // Count the number of TestAnswerFirsts
     * const count = await prisma.testAnswerFirst.count({
     *   where: {
     *     // ... the filter for the TestAnswerFirsts we want to count
     *   }
     * })
    **/
    count<T extends TestAnswerFirstCountArgs>(
      args?: Subset<T, TestAnswerFirstCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestAnswerFirstCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestAnswerFirst.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFirstAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAnswerFirstAggregateArgs>(args: Subset<T, TestAnswerFirstAggregateArgs>): Prisma.PrismaPromise<GetTestAnswerFirstAggregateType<T>>

    /**
     * Group by TestAnswerFirst.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFirstGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestAnswerFirstGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestAnswerFirstGroupByArgs['orderBy'] }
        : { orderBy?: TestAnswerFirstGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestAnswerFirstGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestAnswerFirstGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestAnswerFirst model
   */
  readonly fields: TestAnswerFirstFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestAnswerFirst.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestAnswerFirstClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestAnswerFirst model
   */
  interface TestAnswerFirstFieldRefs {
    readonly id: FieldRef<"TestAnswerFirst", 'Int'>
    readonly studentId: FieldRef<"TestAnswerFirst", 'Int'>
    readonly assignmentId: FieldRef<"TestAnswerFirst", 'Int'>
    readonly blockId: FieldRef<"TestAnswerFirst", 'String'>
    readonly optionKey: FieldRef<"TestAnswerFirst", 'String'>
    readonly createdAt: FieldRef<"TestAnswerFirst", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestAnswerFirst findUnique
   */
  export type TestAnswerFirstFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswerFirst to fetch.
     */
    where: TestAnswerFirstWhereUniqueInput
  }

  /**
   * TestAnswerFirst findUniqueOrThrow
   */
  export type TestAnswerFirstFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswerFirst to fetch.
     */
    where: TestAnswerFirstWhereUniqueInput
  }

  /**
   * TestAnswerFirst findFirst
   */
  export type TestAnswerFirstFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswerFirst to fetch.
     */
    where?: TestAnswerFirstWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswerFirsts to fetch.
     */
    orderBy?: TestAnswerFirstOrderByWithRelationInput | TestAnswerFirstOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAnswerFirsts.
     */
    cursor?: TestAnswerFirstWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswerFirsts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswerFirsts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAnswerFirsts.
     */
    distinct?: TestAnswerFirstScalarFieldEnum | TestAnswerFirstScalarFieldEnum[]
  }

  /**
   * TestAnswerFirst findFirstOrThrow
   */
  export type TestAnswerFirstFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswerFirst to fetch.
     */
    where?: TestAnswerFirstWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswerFirsts to fetch.
     */
    orderBy?: TestAnswerFirstOrderByWithRelationInput | TestAnswerFirstOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAnswerFirsts.
     */
    cursor?: TestAnswerFirstWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswerFirsts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswerFirsts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAnswerFirsts.
     */
    distinct?: TestAnswerFirstScalarFieldEnum | TestAnswerFirstScalarFieldEnum[]
  }

  /**
   * TestAnswerFirst findMany
   */
  export type TestAnswerFirstFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswerFirsts to fetch.
     */
    where?: TestAnswerFirstWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswerFirsts to fetch.
     */
    orderBy?: TestAnswerFirstOrderByWithRelationInput | TestAnswerFirstOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestAnswerFirsts.
     */
    cursor?: TestAnswerFirstWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswerFirsts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswerFirsts.
     */
    skip?: number
    distinct?: TestAnswerFirstScalarFieldEnum | TestAnswerFirstScalarFieldEnum[]
  }

  /**
   * TestAnswerFirst create
   */
  export type TestAnswerFirstCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    /**
     * The data needed to create a TestAnswerFirst.
     */
    data: XOR<TestAnswerFirstCreateInput, TestAnswerFirstUncheckedCreateInput>
  }

  /**
   * TestAnswerFirst createMany
   */
  export type TestAnswerFirstCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestAnswerFirsts.
     */
    data: TestAnswerFirstCreateManyInput | TestAnswerFirstCreateManyInput[]
  }

  /**
   * TestAnswerFirst createManyAndReturn
   */
  export type TestAnswerFirstCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * The data used to create many TestAnswerFirsts.
     */
    data: TestAnswerFirstCreateManyInput | TestAnswerFirstCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestAnswerFirst update
   */
  export type TestAnswerFirstUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    /**
     * The data needed to update a TestAnswerFirst.
     */
    data: XOR<TestAnswerFirstUpdateInput, TestAnswerFirstUncheckedUpdateInput>
    /**
     * Choose, which TestAnswerFirst to update.
     */
    where: TestAnswerFirstWhereUniqueInput
  }

  /**
   * TestAnswerFirst updateMany
   */
  export type TestAnswerFirstUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestAnswerFirsts.
     */
    data: XOR<TestAnswerFirstUpdateManyMutationInput, TestAnswerFirstUncheckedUpdateManyInput>
    /**
     * Filter which TestAnswerFirsts to update
     */
    where?: TestAnswerFirstWhereInput
    /**
     * Limit how many TestAnswerFirsts to update.
     */
    limit?: number
  }

  /**
   * TestAnswerFirst updateManyAndReturn
   */
  export type TestAnswerFirstUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * The data used to update TestAnswerFirsts.
     */
    data: XOR<TestAnswerFirstUpdateManyMutationInput, TestAnswerFirstUncheckedUpdateManyInput>
    /**
     * Filter which TestAnswerFirsts to update
     */
    where?: TestAnswerFirstWhereInput
    /**
     * Limit how many TestAnswerFirsts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestAnswerFirst upsert
   */
  export type TestAnswerFirstUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    /**
     * The filter to search for the TestAnswerFirst to update in case it exists.
     */
    where: TestAnswerFirstWhereUniqueInput
    /**
     * In case the TestAnswerFirst found by the `where` argument doesn't exist, create a new TestAnswerFirst with this data.
     */
    create: XOR<TestAnswerFirstCreateInput, TestAnswerFirstUncheckedCreateInput>
    /**
     * In case the TestAnswerFirst was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestAnswerFirstUpdateInput, TestAnswerFirstUncheckedUpdateInput>
  }

  /**
   * TestAnswerFirst delete
   */
  export type TestAnswerFirstDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
    /**
     * Filter which TestAnswerFirst to delete.
     */
    where: TestAnswerFirstWhereUniqueInput
  }

  /**
   * TestAnswerFirst deleteMany
   */
  export type TestAnswerFirstDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAnswerFirsts to delete
     */
    where?: TestAnswerFirstWhereInput
    /**
     * Limit how many TestAnswerFirsts to delete.
     */
    limit?: number
  }

  /**
   * TestAnswerFirst without action
   */
  export type TestAnswerFirstDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswerFirst
     */
    select?: TestAnswerFirstSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswerFirst
     */
    omit?: TestAnswerFirstOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerFirstInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    surname: 'surname',
    name: 'name',
    patronymic: 'patronymic',
    phone: 'phone',
    passwordHash: 'passwordHash',
    schoolId: 'schoolId',
    className: 'className',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    emailOrPhone: 'emailOrPhone',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const TeacherSchoolScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    schoolId: 'schoolId'
  };

  export type TeacherSchoolScalarFieldEnum = (typeof TeacherSchoolScalarFieldEnum)[keyof typeof TeacherSchoolScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    title: 'title',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const AttemptScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    lessonId: 'lessonId',
    score: 'score',
    completedAt: 'completedAt'
  };

  export type AttemptScalarFieldEnum = (typeof AttemptScalarFieldEnum)[keyof typeof AttemptScalarFieldEnum]


  export const AssignmentTemplateScalarFieldEnum: {
    id: 'id',
    key: 'key',
    title: 'title',
    description: 'description',
    configJson: 'configJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssignmentTemplateScalarFieldEnum = (typeof AssignmentTemplateScalarFieldEnum)[keyof typeof AssignmentTemplateScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId',
    title: 'title',
    goal: 'goal',
    instruction: 'instruction',
    taskType: 'taskType',
    answerFormat: 'answerFormat',
    gradingMode: 'gradingMode',
    maxScore: 'maxScore',
    order: 'order',
    isPublished: 'isPublished',
    configJson: 'configJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const AssignmentFieldScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    fieldKey: 'fieldKey',
    label: 'label',
    fieldType: 'fieldType',
    required: 'required',
    order: 'order',
    optionsJson: 'optionsJson',
    rulesJson: 'rulesJson'
  };

  export type AssignmentFieldScalarFieldEnum = (typeof AssignmentFieldScalarFieldEnum)[keyof typeof AssignmentFieldScalarFieldEnum]


  export const AssignmentSubmissionScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    studentId: 'studentId',
    status: 'status',
    answersJson: 'answersJson',
    score: 'score',
    gradingJson: 'gradingJson',
    feedback: 'feedback',
    submittedAt: 'submittedAt',
    checkedAt: 'checkedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssignmentSubmissionScalarFieldEnum = (typeof AssignmentSubmissionScalarFieldEnum)[keyof typeof AssignmentSubmissionScalarFieldEnum]


  export const TestAnswerFirstScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    assignmentId: 'assignmentId',
    blockId: 'blockId',
    optionKey: 'optionKey',
    createdAt: 'createdAt'
  };

  export type TestAnswerFirstScalarFieldEnum = (typeof TestAnswerFirstScalarFieldEnum)[keyof typeof TestAnswerFirstScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: IntFilter<"School"> | number
    name?: StringFilter<"School"> | string
    code?: StringNullableFilter<"School"> | string | null
    students?: StudentListRelationFilter
    teachers?: TeacherSchoolListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    students?: StudentOrderByRelationAggregateInput
    teachers?: TeacherSchoolOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    code?: StringNullableFilter<"School"> | string | null
    students?: StudentListRelationFilter
    teachers?: TeacherSchoolListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"School"> | number
    name?: StringWithAggregatesFilter<"School"> | string
    code?: StringNullableWithAggregatesFilter<"School"> | string | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    surname?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    patronymic?: StringNullableFilter<"Student"> | string | null
    phone?: StringFilter<"Student"> | string
    passwordHash?: StringFilter<"Student"> | string
    schoolId?: IntFilter<"Student"> | number
    className?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    attempts?: AttemptListRelationFilter
    submissions?: AssignmentSubmissionListRelationFilter
    testAnswerFirsts?: TestAnswerFirstListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrderInput | SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    schoolId?: SortOrder
    className?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    attempts?: AttemptOrderByRelationAggregateInput
    submissions?: AssignmentSubmissionOrderByRelationAggregateInput
    testAnswerFirsts?: TestAnswerFirstOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    surname?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    patronymic?: StringNullableFilter<"Student"> | string | null
    passwordHash?: StringFilter<"Student"> | string
    schoolId?: IntFilter<"Student"> | number
    className?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    attempts?: AttemptListRelationFilter
    submissions?: AssignmentSubmissionListRelationFilter
    testAnswerFirsts?: TestAnswerFirstListRelationFilter
  }, "id" | "phone">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrderInput | SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    schoolId?: SortOrder
    className?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    surname?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    patronymic?: StringNullableWithAggregatesFilter<"Student"> | string | null
    phone?: StringWithAggregatesFilter<"Student"> | string
    passwordHash?: StringWithAggregatesFilter<"Student"> | string
    schoolId?: IntWithAggregatesFilter<"Student"> | number
    className?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    emailOrPhone?: StringFilter<"Teacher"> | string
    passwordHash?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    schools?: TeacherSchoolListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    emailOrPhone?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schools?: TeacherSchoolOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    emailOrPhone?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    passwordHash?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    schools?: TeacherSchoolListRelationFilter
  }, "id" | "emailOrPhone">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    emailOrPhone?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    emailOrPhone?: StringWithAggregatesFilter<"Teacher"> | string
    passwordHash?: StringWithAggregatesFilter<"Teacher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type TeacherSchoolWhereInput = {
    AND?: TeacherSchoolWhereInput | TeacherSchoolWhereInput[]
    OR?: TeacherSchoolWhereInput[]
    NOT?: TeacherSchoolWhereInput | TeacherSchoolWhereInput[]
    id?: IntFilter<"TeacherSchool"> | number
    teacherId?: IntFilter<"TeacherSchool"> | number
    schoolId?: IntFilter<"TeacherSchool"> | number
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type TeacherSchoolOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type TeacherSchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacherId_schoolId?: TeacherSchoolTeacherIdSchoolIdCompoundUniqueInput
    AND?: TeacherSchoolWhereInput | TeacherSchoolWhereInput[]
    OR?: TeacherSchoolWhereInput[]
    NOT?: TeacherSchoolWhereInput | TeacherSchoolWhereInput[]
    teacherId?: IntFilter<"TeacherSchool"> | number
    schoolId?: IntFilter<"TeacherSchool"> | number
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "teacherId_schoolId">

  export type TeacherSchoolOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
    _count?: TeacherSchoolCountOrderByAggregateInput
    _avg?: TeacherSchoolAvgOrderByAggregateInput
    _max?: TeacherSchoolMaxOrderByAggregateInput
    _min?: TeacherSchoolMinOrderByAggregateInput
    _sum?: TeacherSchoolSumOrderByAggregateInput
  }

  export type TeacherSchoolScalarWhereWithAggregatesInput = {
    AND?: TeacherSchoolScalarWhereWithAggregatesInput | TeacherSchoolScalarWhereWithAggregatesInput[]
    OR?: TeacherSchoolScalarWhereWithAggregatesInput[]
    NOT?: TeacherSchoolScalarWhereWithAggregatesInput | TeacherSchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherSchool"> | number
    teacherId?: IntWithAggregatesFilter<"TeacherSchool"> | number
    schoolId?: IntWithAggregatesFilter<"TeacherSchool"> | number
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    title?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    lessons?: LessonListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessons?: LessonOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    lessons?: LessonListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    title?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: IntFilter<"Lesson"> | number
    courseId?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    attempts?: AttemptListRelationFilter
    assignments?: AssignmentListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    attempts?: AttemptOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    courseId?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    attempts?: AttemptListRelationFilter
    assignments?: AssignmentListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lesson"> | number
    courseId?: IntWithAggregatesFilter<"Lesson"> | number
    title?: StringWithAggregatesFilter<"Lesson"> | string
    order?: IntWithAggregatesFilter<"Lesson"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type AttemptWhereInput = {
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    id?: IntFilter<"Attempt"> | number
    studentId?: IntFilter<"Attempt"> | number
    lessonId?: IntFilter<"Attempt"> | number
    score?: IntNullableFilter<"Attempt"> | number | null
    completedAt?: DateTimeFilter<"Attempt"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type AttemptOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    score?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type AttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_lessonId?: AttemptStudentIdLessonIdCompoundUniqueInput
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    studentId?: IntFilter<"Attempt"> | number
    lessonId?: IntFilter<"Attempt"> | number
    score?: IntNullableFilter<"Attempt"> | number | null
    completedAt?: DateTimeFilter<"Attempt"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "studentId_lessonId">

  export type AttemptOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    score?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    _count?: AttemptCountOrderByAggregateInput
    _avg?: AttemptAvgOrderByAggregateInput
    _max?: AttemptMaxOrderByAggregateInput
    _min?: AttemptMinOrderByAggregateInput
    _sum?: AttemptSumOrderByAggregateInput
  }

  export type AttemptScalarWhereWithAggregatesInput = {
    AND?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    OR?: AttemptScalarWhereWithAggregatesInput[]
    NOT?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attempt"> | number
    studentId?: IntWithAggregatesFilter<"Attempt"> | number
    lessonId?: IntWithAggregatesFilter<"Attempt"> | number
    score?: IntNullableWithAggregatesFilter<"Attempt"> | number | null
    completedAt?: DateTimeWithAggregatesFilter<"Attempt"> | Date | string
  }

  export type AssignmentTemplateWhereInput = {
    AND?: AssignmentTemplateWhereInput | AssignmentTemplateWhereInput[]
    OR?: AssignmentTemplateWhereInput[]
    NOT?: AssignmentTemplateWhereInput | AssignmentTemplateWhereInput[]
    id?: IntFilter<"AssignmentTemplate"> | number
    key?: StringFilter<"AssignmentTemplate"> | string
    title?: StringFilter<"AssignmentTemplate"> | string
    description?: StringNullableFilter<"AssignmentTemplate"> | string | null
    configJson?: StringNullableFilter<"AssignmentTemplate"> | string | null
    createdAt?: DateTimeFilter<"AssignmentTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"AssignmentTemplate"> | Date | string
  }

  export type AssignmentTemplateOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    configJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: AssignmentTemplateWhereInput | AssignmentTemplateWhereInput[]
    OR?: AssignmentTemplateWhereInput[]
    NOT?: AssignmentTemplateWhereInput | AssignmentTemplateWhereInput[]
    title?: StringFilter<"AssignmentTemplate"> | string
    description?: StringNullableFilter<"AssignmentTemplate"> | string | null
    configJson?: StringNullableFilter<"AssignmentTemplate"> | string | null
    createdAt?: DateTimeFilter<"AssignmentTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"AssignmentTemplate"> | Date | string
  }, "id" | "key">

  export type AssignmentTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    configJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssignmentTemplateCountOrderByAggregateInput
    _avg?: AssignmentTemplateAvgOrderByAggregateInput
    _max?: AssignmentTemplateMaxOrderByAggregateInput
    _min?: AssignmentTemplateMinOrderByAggregateInput
    _sum?: AssignmentTemplateSumOrderByAggregateInput
  }

  export type AssignmentTemplateScalarWhereWithAggregatesInput = {
    AND?: AssignmentTemplateScalarWhereWithAggregatesInput | AssignmentTemplateScalarWhereWithAggregatesInput[]
    OR?: AssignmentTemplateScalarWhereWithAggregatesInput[]
    NOT?: AssignmentTemplateScalarWhereWithAggregatesInput | AssignmentTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssignmentTemplate"> | number
    key?: StringWithAggregatesFilter<"AssignmentTemplate"> | string
    title?: StringWithAggregatesFilter<"AssignmentTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"AssignmentTemplate"> | string | null
    configJson?: StringNullableWithAggregatesFilter<"AssignmentTemplate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AssignmentTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssignmentTemplate"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: IntFilter<"Assignment"> | number
    lessonId?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    goal?: StringNullableFilter<"Assignment"> | string | null
    instruction?: StringFilter<"Assignment"> | string
    taskType?: StringFilter<"Assignment"> | string
    answerFormat?: StringFilter<"Assignment"> | string
    gradingMode?: StringFilter<"Assignment"> | string
    maxScore?: IntNullableFilter<"Assignment"> | number | null
    order?: IntFilter<"Assignment"> | number
    isPublished?: BoolFilter<"Assignment"> | boolean
    configJson?: StringNullableFilter<"Assignment"> | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    fields?: AssignmentFieldListRelationFilter
    submissions?: AssignmentSubmissionListRelationFilter
    testAnswerFirsts?: TestAnswerFirstListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    goal?: SortOrderInput | SortOrder
    instruction?: SortOrder
    taskType?: SortOrder
    answerFormat?: SortOrder
    gradingMode?: SortOrder
    maxScore?: SortOrderInput | SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    configJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lesson?: LessonOrderByWithRelationInput
    fields?: AssignmentFieldOrderByRelationAggregateInput
    submissions?: AssignmentSubmissionOrderByRelationAggregateInput
    testAnswerFirsts?: TestAnswerFirstOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    lessonId?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    goal?: StringNullableFilter<"Assignment"> | string | null
    instruction?: StringFilter<"Assignment"> | string
    taskType?: StringFilter<"Assignment"> | string
    answerFormat?: StringFilter<"Assignment"> | string
    gradingMode?: StringFilter<"Assignment"> | string
    maxScore?: IntNullableFilter<"Assignment"> | number | null
    order?: IntFilter<"Assignment"> | number
    isPublished?: BoolFilter<"Assignment"> | boolean
    configJson?: StringNullableFilter<"Assignment"> | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    fields?: AssignmentFieldListRelationFilter
    submissions?: AssignmentSubmissionListRelationFilter
    testAnswerFirsts?: TestAnswerFirstListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    goal?: SortOrderInput | SortOrder
    instruction?: SortOrder
    taskType?: SortOrder
    answerFormat?: SortOrder
    gradingMode?: SortOrder
    maxScore?: SortOrderInput | SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    configJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assignment"> | number
    lessonId?: IntWithAggregatesFilter<"Assignment"> | number
    title?: StringWithAggregatesFilter<"Assignment"> | string
    goal?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    instruction?: StringWithAggregatesFilter<"Assignment"> | string
    taskType?: StringWithAggregatesFilter<"Assignment"> | string
    answerFormat?: StringWithAggregatesFilter<"Assignment"> | string
    gradingMode?: StringWithAggregatesFilter<"Assignment"> | string
    maxScore?: IntNullableWithAggregatesFilter<"Assignment"> | number | null
    order?: IntWithAggregatesFilter<"Assignment"> | number
    isPublished?: BoolWithAggregatesFilter<"Assignment"> | boolean
    configJson?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type AssignmentFieldWhereInput = {
    AND?: AssignmentFieldWhereInput | AssignmentFieldWhereInput[]
    OR?: AssignmentFieldWhereInput[]
    NOT?: AssignmentFieldWhereInput | AssignmentFieldWhereInput[]
    id?: IntFilter<"AssignmentField"> | number
    assignmentId?: IntFilter<"AssignmentField"> | number
    fieldKey?: StringFilter<"AssignmentField"> | string
    label?: StringFilter<"AssignmentField"> | string
    fieldType?: StringFilter<"AssignmentField"> | string
    required?: BoolFilter<"AssignmentField"> | boolean
    order?: IntFilter<"AssignmentField"> | number
    optionsJson?: StringNullableFilter<"AssignmentField"> | string | null
    rulesJson?: StringNullableFilter<"AssignmentField"> | string | null
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
  }

  export type AssignmentFieldOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    fieldKey?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    optionsJson?: SortOrderInput | SortOrder
    rulesJson?: SortOrderInput | SortOrder
    assignment?: AssignmentOrderByWithRelationInput
  }

  export type AssignmentFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssignmentFieldWhereInput | AssignmentFieldWhereInput[]
    OR?: AssignmentFieldWhereInput[]
    NOT?: AssignmentFieldWhereInput | AssignmentFieldWhereInput[]
    assignmentId?: IntFilter<"AssignmentField"> | number
    fieldKey?: StringFilter<"AssignmentField"> | string
    label?: StringFilter<"AssignmentField"> | string
    fieldType?: StringFilter<"AssignmentField"> | string
    required?: BoolFilter<"AssignmentField"> | boolean
    order?: IntFilter<"AssignmentField"> | number
    optionsJson?: StringNullableFilter<"AssignmentField"> | string | null
    rulesJson?: StringNullableFilter<"AssignmentField"> | string | null
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
  }, "id">

  export type AssignmentFieldOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    fieldKey?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    optionsJson?: SortOrderInput | SortOrder
    rulesJson?: SortOrderInput | SortOrder
    _count?: AssignmentFieldCountOrderByAggregateInput
    _avg?: AssignmentFieldAvgOrderByAggregateInput
    _max?: AssignmentFieldMaxOrderByAggregateInput
    _min?: AssignmentFieldMinOrderByAggregateInput
    _sum?: AssignmentFieldSumOrderByAggregateInput
  }

  export type AssignmentFieldScalarWhereWithAggregatesInput = {
    AND?: AssignmentFieldScalarWhereWithAggregatesInput | AssignmentFieldScalarWhereWithAggregatesInput[]
    OR?: AssignmentFieldScalarWhereWithAggregatesInput[]
    NOT?: AssignmentFieldScalarWhereWithAggregatesInput | AssignmentFieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssignmentField"> | number
    assignmentId?: IntWithAggregatesFilter<"AssignmentField"> | number
    fieldKey?: StringWithAggregatesFilter<"AssignmentField"> | string
    label?: StringWithAggregatesFilter<"AssignmentField"> | string
    fieldType?: StringWithAggregatesFilter<"AssignmentField"> | string
    required?: BoolWithAggregatesFilter<"AssignmentField"> | boolean
    order?: IntWithAggregatesFilter<"AssignmentField"> | number
    optionsJson?: StringNullableWithAggregatesFilter<"AssignmentField"> | string | null
    rulesJson?: StringNullableWithAggregatesFilter<"AssignmentField"> | string | null
  }

  export type AssignmentSubmissionWhereInput = {
    AND?: AssignmentSubmissionWhereInput | AssignmentSubmissionWhereInput[]
    OR?: AssignmentSubmissionWhereInput[]
    NOT?: AssignmentSubmissionWhereInput | AssignmentSubmissionWhereInput[]
    id?: IntFilter<"AssignmentSubmission"> | number
    assignmentId?: IntFilter<"AssignmentSubmission"> | number
    studentId?: IntFilter<"AssignmentSubmission"> | number
    status?: StringFilter<"AssignmentSubmission"> | string
    answersJson?: StringFilter<"AssignmentSubmission"> | string
    score?: IntNullableFilter<"AssignmentSubmission"> | number | null
    gradingJson?: StringNullableFilter<"AssignmentSubmission"> | string | null
    feedback?: StringNullableFilter<"AssignmentSubmission"> | string | null
    submittedAt?: DateTimeNullableFilter<"AssignmentSubmission"> | Date | string | null
    checkedAt?: DateTimeNullableFilter<"AssignmentSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"AssignmentSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"AssignmentSubmission"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type AssignmentSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    answersJson?: SortOrder
    score?: SortOrderInput | SortOrder
    gradingJson?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    checkedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type AssignmentSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    assignmentId_studentId?: AssignmentSubmissionAssignmentIdStudentIdCompoundUniqueInput
    AND?: AssignmentSubmissionWhereInput | AssignmentSubmissionWhereInput[]
    OR?: AssignmentSubmissionWhereInput[]
    NOT?: AssignmentSubmissionWhereInput | AssignmentSubmissionWhereInput[]
    assignmentId?: IntFilter<"AssignmentSubmission"> | number
    studentId?: IntFilter<"AssignmentSubmission"> | number
    status?: StringFilter<"AssignmentSubmission"> | string
    answersJson?: StringFilter<"AssignmentSubmission"> | string
    score?: IntNullableFilter<"AssignmentSubmission"> | number | null
    gradingJson?: StringNullableFilter<"AssignmentSubmission"> | string | null
    feedback?: StringNullableFilter<"AssignmentSubmission"> | string | null
    submittedAt?: DateTimeNullableFilter<"AssignmentSubmission"> | Date | string | null
    checkedAt?: DateTimeNullableFilter<"AssignmentSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"AssignmentSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"AssignmentSubmission"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "assignmentId_studentId">

  export type AssignmentSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    answersJson?: SortOrder
    score?: SortOrderInput | SortOrder
    gradingJson?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    checkedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssignmentSubmissionCountOrderByAggregateInput
    _avg?: AssignmentSubmissionAvgOrderByAggregateInput
    _max?: AssignmentSubmissionMaxOrderByAggregateInput
    _min?: AssignmentSubmissionMinOrderByAggregateInput
    _sum?: AssignmentSubmissionSumOrderByAggregateInput
  }

  export type AssignmentSubmissionScalarWhereWithAggregatesInput = {
    AND?: AssignmentSubmissionScalarWhereWithAggregatesInput | AssignmentSubmissionScalarWhereWithAggregatesInput[]
    OR?: AssignmentSubmissionScalarWhereWithAggregatesInput[]
    NOT?: AssignmentSubmissionScalarWhereWithAggregatesInput | AssignmentSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssignmentSubmission"> | number
    assignmentId?: IntWithAggregatesFilter<"AssignmentSubmission"> | number
    studentId?: IntWithAggregatesFilter<"AssignmentSubmission"> | number
    status?: StringWithAggregatesFilter<"AssignmentSubmission"> | string
    answersJson?: StringWithAggregatesFilter<"AssignmentSubmission"> | string
    score?: IntNullableWithAggregatesFilter<"AssignmentSubmission"> | number | null
    gradingJson?: StringNullableWithAggregatesFilter<"AssignmentSubmission"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"AssignmentSubmission"> | string | null
    submittedAt?: DateTimeNullableWithAggregatesFilter<"AssignmentSubmission"> | Date | string | null
    checkedAt?: DateTimeNullableWithAggregatesFilter<"AssignmentSubmission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AssignmentSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssignmentSubmission"> | Date | string
  }

  export type TestAnswerFirstWhereInput = {
    AND?: TestAnswerFirstWhereInput | TestAnswerFirstWhereInput[]
    OR?: TestAnswerFirstWhereInput[]
    NOT?: TestAnswerFirstWhereInput | TestAnswerFirstWhereInput[]
    id?: IntFilter<"TestAnswerFirst"> | number
    studentId?: IntFilter<"TestAnswerFirst"> | number
    assignmentId?: IntFilter<"TestAnswerFirst"> | number
    blockId?: StringFilter<"TestAnswerFirst"> | string
    optionKey?: StringFilter<"TestAnswerFirst"> | string
    createdAt?: DateTimeFilter<"TestAnswerFirst"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
  }

  export type TestAnswerFirstOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    assignmentId?: SortOrder
    blockId?: SortOrder
    optionKey?: SortOrder
    createdAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    assignment?: AssignmentOrderByWithRelationInput
  }

  export type TestAnswerFirstWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_assignmentId_blockId?: TestAnswerFirstStudentIdAssignmentIdBlockIdCompoundUniqueInput
    AND?: TestAnswerFirstWhereInput | TestAnswerFirstWhereInput[]
    OR?: TestAnswerFirstWhereInput[]
    NOT?: TestAnswerFirstWhereInput | TestAnswerFirstWhereInput[]
    studentId?: IntFilter<"TestAnswerFirst"> | number
    assignmentId?: IntFilter<"TestAnswerFirst"> | number
    blockId?: StringFilter<"TestAnswerFirst"> | string
    optionKey?: StringFilter<"TestAnswerFirst"> | string
    createdAt?: DateTimeFilter<"TestAnswerFirst"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
  }, "id" | "studentId_assignmentId_blockId">

  export type TestAnswerFirstOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    assignmentId?: SortOrder
    blockId?: SortOrder
    optionKey?: SortOrder
    createdAt?: SortOrder
    _count?: TestAnswerFirstCountOrderByAggregateInput
    _avg?: TestAnswerFirstAvgOrderByAggregateInput
    _max?: TestAnswerFirstMaxOrderByAggregateInput
    _min?: TestAnswerFirstMinOrderByAggregateInput
    _sum?: TestAnswerFirstSumOrderByAggregateInput
  }

  export type TestAnswerFirstScalarWhereWithAggregatesInput = {
    AND?: TestAnswerFirstScalarWhereWithAggregatesInput | TestAnswerFirstScalarWhereWithAggregatesInput[]
    OR?: TestAnswerFirstScalarWhereWithAggregatesInput[]
    NOT?: TestAnswerFirstScalarWhereWithAggregatesInput | TestAnswerFirstScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestAnswerFirst"> | number
    studentId?: IntWithAggregatesFilter<"TestAnswerFirst"> | number
    assignmentId?: IntWithAggregatesFilter<"TestAnswerFirst"> | number
    blockId?: StringWithAggregatesFilter<"TestAnswerFirst"> | string
    optionKey?: StringWithAggregatesFilter<"TestAnswerFirst"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TestAnswerFirst"> | Date | string
  }

  export type SchoolCreateInput = {
    name: string
    code?: string | null
    students?: StudentCreateNestedManyWithoutSchoolInput
    teachers?: TeacherSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: number
    name: string
    code?: string | null
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
    teachers?: TeacherSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
    teachers?: TeacherSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: number
    name: string
    code?: string | null
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentCreateInput = {
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    attempts?: AttemptCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
    testAnswerFirsts?: TestAnswerFirstCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    schoolId: number
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
    testAnswerFirsts?: TestAnswerFirstUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    attempts?: AttemptUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
    testAnswerFirsts?: TestAnswerFirstUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    schoolId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    testAnswerFirsts?: TestAnswerFirstUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    schoolId: number
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    schoolId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateInput = {
    emailOrPhone: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: TeacherSchoolCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    emailOrPhone: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: TeacherSchoolUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    emailOrPhone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: TeacherSchoolUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    emailOrPhone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: TeacherSchoolUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    emailOrPhone: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    emailOrPhone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    emailOrPhone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSchoolCreateInput = {
    teacher: TeacherCreateNestedOneWithoutSchoolsInput
    school: SchoolCreateNestedOneWithoutTeachersInput
  }

  export type TeacherSchoolUncheckedCreateInput = {
    id?: number
    teacherId: number
    schoolId: number
  }

  export type TeacherSchoolUpdateInput = {
    teacher?: TeacherUpdateOneRequiredWithoutSchoolsNestedInput
    school?: SchoolUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherSchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSchoolCreateManyInput = {
    id?: number
    teacherId: number
    schoolId: number
  }

  export type TeacherSchoolUpdateManyMutationInput = {

  }

  export type TeacherSchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutLessonsInput
    attempts?: AttemptCreateNestedManyWithoutLessonInput
    assignments?: AssignmentCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: number
    courseId: number
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutLessonInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    attempts?: AttemptUpdateManyWithoutLessonNestedInput
    assignments?: AssignmentUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutLessonNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: number
    courseId: number
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateInput = {
    score?: number | null
    completedAt?: Date | string
    student: StudentCreateNestedOneWithoutAttemptsInput
    lesson: LessonCreateNestedOneWithoutAttemptsInput
  }

  export type AttemptUncheckedCreateInput = {
    id?: number
    studentId: number
    lessonId: number
    score?: number | null
    completedAt?: Date | string
  }

  export type AttemptUpdateInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAttemptsNestedInput
    lesson?: LessonUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AttemptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateManyInput = {
    id?: number
    studentId: number
    lessonId: number
    score?: number | null
    completedAt?: Date | string
  }

  export type AttemptUpdateManyMutationInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentTemplateCreateInput = {
    key: string
    title: string
    description?: string | null
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentTemplateUncheckedCreateInput = {
    id?: number
    key: string
    title: string
    description?: string | null
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentTemplateUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentTemplateCreateManyInput = {
    id?: number
    key: string
    title: string
    description?: string | null
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentTemplateUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutAssignmentsInput
    fields?: AssignmentFieldCreateNestedManyWithoutAssignmentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutAssignmentInput
    testAnswerFirsts?: TestAnswerFirstCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: number
    lessonId: number
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: AssignmentFieldUncheckedCreateNestedManyWithoutAssignmentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    testAnswerFirsts?: TestAnswerFirstUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutAssignmentsNestedInput
    fields?: AssignmentFieldUpdateManyWithoutAssignmentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput
    testAnswerFirsts?: TestAnswerFirstUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: AssignmentFieldUncheckedUpdateManyWithoutAssignmentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    testAnswerFirsts?: TestAnswerFirstUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: number
    lessonId: number
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentFieldCreateInput = {
    fieldKey: string
    label: string
    fieldType: string
    required?: boolean
    order?: number
    optionsJson?: string | null
    rulesJson?: string | null
    assignment: AssignmentCreateNestedOneWithoutFieldsInput
  }

  export type AssignmentFieldUncheckedCreateInput = {
    id?: number
    assignmentId: number
    fieldKey: string
    label: string
    fieldType: string
    required?: boolean
    order?: number
    optionsJson?: string | null
    rulesJson?: string | null
  }

  export type AssignmentFieldUpdateInput = {
    fieldKey?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    optionsJson?: NullableStringFieldUpdateOperationsInput | string | null
    rulesJson?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: AssignmentUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type AssignmentFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    fieldKey?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    optionsJson?: NullableStringFieldUpdateOperationsInput | string | null
    rulesJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentFieldCreateManyInput = {
    id?: number
    assignmentId: number
    fieldKey: string
    label: string
    fieldType: string
    required?: boolean
    order?: number
    optionsJson?: string | null
    rulesJson?: string | null
  }

  export type AssignmentFieldUpdateManyMutationInput = {
    fieldKey?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    optionsJson?: NullableStringFieldUpdateOperationsInput | string | null
    rulesJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    fieldKey?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    optionsJson?: NullableStringFieldUpdateOperationsInput | string | null
    rulesJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentSubmissionCreateInput = {
    status?: string
    answersJson: string
    score?: number | null
    gradingJson?: string | null
    feedback?: string | null
    submittedAt?: Date | string | null
    checkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
    student: StudentCreateNestedOneWithoutSubmissionsInput
  }

  export type AssignmentSubmissionUncheckedCreateInput = {
    id?: number
    assignmentId: number
    studentId: number
    status?: string
    answersJson: string
    score?: number | null
    gradingJson?: string | null
    feedback?: string | null
    submittedAt?: Date | string | null
    checkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentSubmissionUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: StudentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AssignmentSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionCreateManyInput = {
    id?: number
    assignmentId: number
    studentId: number
    status?: string
    answersJson: string
    score?: number | null
    gradingJson?: string | null
    feedback?: string | null
    submittedAt?: Date | string | null
    checkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentSubmissionUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAnswerFirstCreateInput = {
    blockId: string
    optionKey: string
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutTestAnswerFirstsInput
    assignment: AssignmentCreateNestedOneWithoutTestAnswerFirstsInput
  }

  export type TestAnswerFirstUncheckedCreateInput = {
    id?: number
    studentId: number
    assignmentId: number
    blockId: string
    optionKey: string
    createdAt?: Date | string
  }

  export type TestAnswerFirstUpdateInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutTestAnswerFirstsNestedInput
    assignment?: AssignmentUpdateOneRequiredWithoutTestAnswerFirstsNestedInput
  }

  export type TestAnswerFirstUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAnswerFirstCreateManyInput = {
    id?: number
    studentId: number
    assignmentId: number
    blockId: string
    optionKey: string
    createdAt?: Date | string
  }

  export type TestAnswerFirstUpdateManyMutationInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAnswerFirstUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type TeacherSchoolListRelationFilter = {
    every?: TeacherSchoolWhereInput
    some?: TeacherSchoolWhereInput
    none?: TeacherSchoolWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherSchoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type AttemptListRelationFilter = {
    every?: AttemptWhereInput
    some?: AttemptWhereInput
    none?: AttemptWhereInput
  }

  export type AssignmentSubmissionListRelationFilter = {
    every?: AssignmentSubmissionWhereInput
    some?: AssignmentSubmissionWhereInput
    none?: AssignmentSubmissionWhereInput
  }

  export type TestAnswerFirstListRelationFilter = {
    every?: TestAnswerFirstWhereInput
    some?: TestAnswerFirstWhereInput
    none?: TestAnswerFirstWhereInput
  }

  export type AttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestAnswerFirstOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    schoolId?: SortOrder
    className?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    schoolId?: SortOrder
    className?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    schoolId?: SortOrder
    className?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    emailOrPhone?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    emailOrPhone?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    emailOrPhone?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type TeacherSchoolTeacherIdSchoolIdCompoundUniqueInput = {
    teacherId: number
    schoolId: number
  }

  export type TeacherSchoolCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherSchoolAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherSchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherSchoolMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherSchoolSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    order?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    order?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type AttemptStudentIdLessonIdCompoundUniqueInput = {
    studentId: number
    lessonId: number
  }

  export type AttemptCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
  }

  export type AttemptAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    score?: SortOrder
  }

  export type AttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
  }

  export type AttemptMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
  }

  export type AttemptSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AssignmentTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrder
    configJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AssignmentTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrder
    configJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrder
    configJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentTemplateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AssignmentFieldListRelationFilter = {
    every?: AssignmentFieldWhereInput
    some?: AssignmentFieldWhereInput
    none?: AssignmentFieldWhereInput
  }

  export type AssignmentFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    goal?: SortOrder
    instruction?: SortOrder
    taskType?: SortOrder
    answerFormat?: SortOrder
    gradingMode?: SortOrder
    maxScore?: SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    configJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    maxScore?: SortOrder
    order?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    goal?: SortOrder
    instruction?: SortOrder
    taskType?: SortOrder
    answerFormat?: SortOrder
    gradingMode?: SortOrder
    maxScore?: SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    configJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    goal?: SortOrder
    instruction?: SortOrder
    taskType?: SortOrder
    answerFormat?: SortOrder
    gradingMode?: SortOrder
    maxScore?: SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    configJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    maxScore?: SortOrder
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AssignmentScalarRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type AssignmentFieldCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    fieldKey?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    optionsJson?: SortOrder
    rulesJson?: SortOrder
  }

  export type AssignmentFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    order?: SortOrder
  }

  export type AssignmentFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    fieldKey?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    optionsJson?: SortOrder
    rulesJson?: SortOrder
  }

  export type AssignmentFieldMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    fieldKey?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    required?: SortOrder
    order?: SortOrder
    optionsJson?: SortOrder
    rulesJson?: SortOrder
  }

  export type AssignmentFieldSumOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    order?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AssignmentSubmissionAssignmentIdStudentIdCompoundUniqueInput = {
    assignmentId: number
    studentId: number
  }

  export type AssignmentSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    answersJson?: SortOrder
    score?: SortOrder
    gradingJson?: SortOrder
    feedback?: SortOrder
    submittedAt?: SortOrder
    checkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
  }

  export type AssignmentSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    answersJson?: SortOrder
    score?: SortOrder
    gradingJson?: SortOrder
    feedback?: SortOrder
    submittedAt?: SortOrder
    checkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    answersJson?: SortOrder
    score?: SortOrder
    gradingJson?: SortOrder
    feedback?: SortOrder
    submittedAt?: SortOrder
    checkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TestAnswerFirstStudentIdAssignmentIdBlockIdCompoundUniqueInput = {
    studentId: number
    assignmentId: number
    blockId: string
  }

  export type TestAnswerFirstCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    assignmentId?: SortOrder
    blockId?: SortOrder
    optionKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TestAnswerFirstAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    assignmentId?: SortOrder
  }

  export type TestAnswerFirstMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    assignmentId?: SortOrder
    blockId?: SortOrder
    optionKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TestAnswerFirstMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    assignmentId?: SortOrder
    blockId?: SortOrder
    optionKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TestAnswerFirstSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    assignmentId?: SortOrder
  }

  export type StudentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TeacherSchoolCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput> | TeacherSchoolCreateWithoutSchoolInput[] | TeacherSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutSchoolInput | TeacherSchoolCreateOrConnectWithoutSchoolInput[]
    createMany?: TeacherSchoolCreateManySchoolInputEnvelope
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TeacherSchoolUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput> | TeacherSchoolCreateWithoutSchoolInput[] | TeacherSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutSchoolInput | TeacherSchoolCreateOrConnectWithoutSchoolInput[]
    createMany?: TeacherSchoolCreateManySchoolInputEnvelope
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StudentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TeacherSchoolUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput> | TeacherSchoolCreateWithoutSchoolInput[] | TeacherSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutSchoolInput | TeacherSchoolCreateOrConnectWithoutSchoolInput[]
    upsert?: TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput | TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TeacherSchoolCreateManySchoolInputEnvelope
    set?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    disconnect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    delete?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    update?: TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput | TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TeacherSchoolUpdateManyWithWhereWithoutSchoolInput | TeacherSchoolUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TeacherSchoolUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput> | TeacherSchoolCreateWithoutSchoolInput[] | TeacherSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutSchoolInput | TeacherSchoolCreateOrConnectWithoutSchoolInput[]
    upsert?: TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput | TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TeacherSchoolCreateManySchoolInputEnvelope
    set?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    disconnect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    delete?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    update?: TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput | TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TeacherSchoolUpdateManyWithWhereWithoutSchoolInput | TeacherSchoolUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type AttemptCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttemptCreateWithoutStudentInput, AttemptUncheckedCreateWithoutStudentInput> | AttemptCreateWithoutStudentInput[] | AttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutStudentInput | AttemptCreateOrConnectWithoutStudentInput[]
    createMany?: AttemptCreateManyStudentInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type AssignmentSubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput> | AssignmentSubmissionCreateWithoutStudentInput[] | AssignmentSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutStudentInput | AssignmentSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: AssignmentSubmissionCreateManyStudentInputEnvelope
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
  }

  export type TestAnswerFirstCreateNestedManyWithoutStudentInput = {
    create?: XOR<TestAnswerFirstCreateWithoutStudentInput, TestAnswerFirstUncheckedCreateWithoutStudentInput> | TestAnswerFirstCreateWithoutStudentInput[] | TestAnswerFirstUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TestAnswerFirstCreateOrConnectWithoutStudentInput | TestAnswerFirstCreateOrConnectWithoutStudentInput[]
    createMany?: TestAnswerFirstCreateManyStudentInputEnvelope
    connect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
  }

  export type AttemptUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttemptCreateWithoutStudentInput, AttemptUncheckedCreateWithoutStudentInput> | AttemptCreateWithoutStudentInput[] | AttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutStudentInput | AttemptCreateOrConnectWithoutStudentInput[]
    createMany?: AttemptCreateManyStudentInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput> | AssignmentSubmissionCreateWithoutStudentInput[] | AssignmentSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutStudentInput | AssignmentSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: AssignmentSubmissionCreateManyStudentInputEnvelope
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
  }

  export type TestAnswerFirstUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<TestAnswerFirstCreateWithoutStudentInput, TestAnswerFirstUncheckedCreateWithoutStudentInput> | TestAnswerFirstCreateWithoutStudentInput[] | TestAnswerFirstUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TestAnswerFirstCreateOrConnectWithoutStudentInput | TestAnswerFirstCreateOrConnectWithoutStudentInput[]
    createMany?: TestAnswerFirstCreateManyStudentInputEnvelope
    connect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SchoolUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    upsert?: SchoolUpsertWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutStudentsInput, SchoolUpdateWithoutStudentsInput>, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type AttemptUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttemptCreateWithoutStudentInput, AttemptUncheckedCreateWithoutStudentInput> | AttemptCreateWithoutStudentInput[] | AttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutStudentInput | AttemptCreateOrConnectWithoutStudentInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutStudentInput | AttemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttemptCreateManyStudentInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutStudentInput | AttemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutStudentInput | AttemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type AssignmentSubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput> | AssignmentSubmissionCreateWithoutStudentInput[] | AssignmentSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutStudentInput | AssignmentSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput | AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignmentSubmissionCreateManyStudentInputEnvelope
    set?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    disconnect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    delete?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    update?: AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput | AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput | AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
  }

  export type TestAnswerFirstUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TestAnswerFirstCreateWithoutStudentInput, TestAnswerFirstUncheckedCreateWithoutStudentInput> | TestAnswerFirstCreateWithoutStudentInput[] | TestAnswerFirstUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TestAnswerFirstCreateOrConnectWithoutStudentInput | TestAnswerFirstCreateOrConnectWithoutStudentInput[]
    upsert?: TestAnswerFirstUpsertWithWhereUniqueWithoutStudentInput | TestAnswerFirstUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TestAnswerFirstCreateManyStudentInputEnvelope
    set?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    disconnect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    delete?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    connect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    update?: TestAnswerFirstUpdateWithWhereUniqueWithoutStudentInput | TestAnswerFirstUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TestAnswerFirstUpdateManyWithWhereWithoutStudentInput | TestAnswerFirstUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TestAnswerFirstScalarWhereInput | TestAnswerFirstScalarWhereInput[]
  }

  export type AttemptUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttemptCreateWithoutStudentInput, AttemptUncheckedCreateWithoutStudentInput> | AttemptCreateWithoutStudentInput[] | AttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutStudentInput | AttemptCreateOrConnectWithoutStudentInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutStudentInput | AttemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttemptCreateManyStudentInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutStudentInput | AttemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutStudentInput | AttemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput> | AssignmentSubmissionCreateWithoutStudentInput[] | AssignmentSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutStudentInput | AssignmentSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput | AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignmentSubmissionCreateManyStudentInputEnvelope
    set?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    disconnect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    delete?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    update?: AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput | AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput | AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
  }

  export type TestAnswerFirstUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TestAnswerFirstCreateWithoutStudentInput, TestAnswerFirstUncheckedCreateWithoutStudentInput> | TestAnswerFirstCreateWithoutStudentInput[] | TestAnswerFirstUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TestAnswerFirstCreateOrConnectWithoutStudentInput | TestAnswerFirstCreateOrConnectWithoutStudentInput[]
    upsert?: TestAnswerFirstUpsertWithWhereUniqueWithoutStudentInput | TestAnswerFirstUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TestAnswerFirstCreateManyStudentInputEnvelope
    set?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    disconnect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    delete?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    connect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    update?: TestAnswerFirstUpdateWithWhereUniqueWithoutStudentInput | TestAnswerFirstUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TestAnswerFirstUpdateManyWithWhereWithoutStudentInput | TestAnswerFirstUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TestAnswerFirstScalarWhereInput | TestAnswerFirstScalarWhereInput[]
  }

  export type TeacherSchoolCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput> | TeacherSchoolCreateWithoutTeacherInput[] | TeacherSchoolUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutTeacherInput | TeacherSchoolCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSchoolCreateManyTeacherInputEnvelope
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
  }

  export type TeacherSchoolUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput> | TeacherSchoolCreateWithoutTeacherInput[] | TeacherSchoolUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutTeacherInput | TeacherSchoolCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSchoolCreateManyTeacherInputEnvelope
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
  }

  export type TeacherSchoolUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput> | TeacherSchoolCreateWithoutTeacherInput[] | TeacherSchoolUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutTeacherInput | TeacherSchoolCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput | TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSchoolCreateManyTeacherInputEnvelope
    set?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    disconnect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    delete?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    update?: TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput | TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSchoolUpdateManyWithWhereWithoutTeacherInput | TeacherSchoolUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
  }

  export type TeacherSchoolUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput> | TeacherSchoolCreateWithoutTeacherInput[] | TeacherSchoolUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutTeacherInput | TeacherSchoolCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput | TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSchoolCreateManyTeacherInputEnvelope
    set?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    disconnect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    delete?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    update?: TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput | TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSchoolUpdateManyWithWhereWithoutTeacherInput | TeacherSchoolUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutSchoolsInput = {
    create?: XOR<TeacherCreateWithoutSchoolsInput, TeacherUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSchoolsInput
    connect?: TeacherWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutTeachersInput = {
    create?: XOR<SchoolCreateWithoutTeachersInput, SchoolUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTeachersInput
    connect?: SchoolWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutSchoolsNestedInput = {
    create?: XOR<TeacherCreateWithoutSchoolsInput, TeacherUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSchoolsInput
    upsert?: TeacherUpsertWithoutSchoolsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSchoolsInput, TeacherUpdateWithoutSchoolsInput>, TeacherUncheckedUpdateWithoutSchoolsInput>
  }

  export type SchoolUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<SchoolCreateWithoutTeachersInput, SchoolUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTeachersInput
    upsert?: SchoolUpsertWithoutTeachersInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutTeachersInput, SchoolUpdateWithoutTeachersInput>, SchoolUncheckedUpdateWithoutTeachersInput>
  }

  export type LessonCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    connect?: CourseWhereUniqueInput
  }

  export type AttemptCreateNestedManyWithoutLessonInput = {
    create?: XOR<AttemptCreateWithoutLessonInput, AttemptUncheckedCreateWithoutLessonInput> | AttemptCreateWithoutLessonInput[] | AttemptUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutLessonInput | AttemptCreateOrConnectWithoutLessonInput[]
    createMany?: AttemptCreateManyLessonInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutLessonInput = {
    create?: XOR<AssignmentCreateWithoutLessonInput, AssignmentUncheckedCreateWithoutLessonInput> | AssignmentCreateWithoutLessonInput[] | AssignmentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutLessonInput | AssignmentCreateOrConnectWithoutLessonInput[]
    createMany?: AssignmentCreateManyLessonInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AttemptUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<AttemptCreateWithoutLessonInput, AttemptUncheckedCreateWithoutLessonInput> | AttemptCreateWithoutLessonInput[] | AttemptUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutLessonInput | AttemptCreateOrConnectWithoutLessonInput[]
    createMany?: AttemptCreateManyLessonInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<AssignmentCreateWithoutLessonInput, AssignmentUncheckedCreateWithoutLessonInput> | AssignmentCreateWithoutLessonInput[] | AssignmentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutLessonInput | AssignmentCreateOrConnectWithoutLessonInput[]
    createMany?: AssignmentCreateManyLessonInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    upsert?: CourseUpsertWithoutLessonsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLessonsInput, CourseUpdateWithoutLessonsInput>, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type AttemptUpdateManyWithoutLessonNestedInput = {
    create?: XOR<AttemptCreateWithoutLessonInput, AttemptUncheckedCreateWithoutLessonInput> | AttemptCreateWithoutLessonInput[] | AttemptUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutLessonInput | AttemptCreateOrConnectWithoutLessonInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutLessonInput | AttemptUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: AttemptCreateManyLessonInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutLessonInput | AttemptUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutLessonInput | AttemptUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutLessonNestedInput = {
    create?: XOR<AssignmentCreateWithoutLessonInput, AssignmentUncheckedCreateWithoutLessonInput> | AssignmentCreateWithoutLessonInput[] | AssignmentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutLessonInput | AssignmentCreateOrConnectWithoutLessonInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutLessonInput | AssignmentUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: AssignmentCreateManyLessonInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutLessonInput | AssignmentUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutLessonInput | AssignmentUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AttemptUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<AttemptCreateWithoutLessonInput, AttemptUncheckedCreateWithoutLessonInput> | AttemptCreateWithoutLessonInput[] | AttemptUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutLessonInput | AttemptCreateOrConnectWithoutLessonInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutLessonInput | AttemptUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: AttemptCreateManyLessonInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutLessonInput | AttemptUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutLessonInput | AttemptUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<AssignmentCreateWithoutLessonInput, AssignmentUncheckedCreateWithoutLessonInput> | AssignmentCreateWithoutLessonInput[] | AssignmentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutLessonInput | AssignmentCreateOrConnectWithoutLessonInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutLessonInput | AssignmentUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: AssignmentCreateManyLessonInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutLessonInput | AssignmentUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutLessonInput | AssignmentUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<StudentCreateWithoutAttemptsInput, StudentUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttemptsInput
    connect?: StudentWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<LessonCreateWithoutAttemptsInput, LessonUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutAttemptsInput
    connect?: LessonWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<StudentCreateWithoutAttemptsInput, StudentUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttemptsInput
    upsert?: StudentUpsertWithoutAttemptsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttemptsInput, StudentUpdateWithoutAttemptsInput>, StudentUncheckedUpdateWithoutAttemptsInput>
  }

  export type LessonUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<LessonCreateWithoutAttemptsInput, LessonUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutAttemptsInput
    upsert?: LessonUpsertWithoutAttemptsInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutAttemptsInput, LessonUpdateWithoutAttemptsInput>, LessonUncheckedUpdateWithoutAttemptsInput>
  }

  export type LessonCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<LessonCreateWithoutAssignmentsInput, LessonUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutAssignmentsInput
    connect?: LessonWhereUniqueInput
  }

  export type AssignmentFieldCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentFieldCreateWithoutAssignmentInput, AssignmentFieldUncheckedCreateWithoutAssignmentInput> | AssignmentFieldCreateWithoutAssignmentInput[] | AssignmentFieldUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentFieldCreateOrConnectWithoutAssignmentInput | AssignmentFieldCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentFieldCreateManyAssignmentInputEnvelope
    connect?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
  }

  export type AssignmentSubmissionCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput> | AssignmentSubmissionCreateWithoutAssignmentInput[] | AssignmentSubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutAssignmentInput | AssignmentSubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentSubmissionCreateManyAssignmentInputEnvelope
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
  }

  export type TestAnswerFirstCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<TestAnswerFirstCreateWithoutAssignmentInput, TestAnswerFirstUncheckedCreateWithoutAssignmentInput> | TestAnswerFirstCreateWithoutAssignmentInput[] | TestAnswerFirstUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TestAnswerFirstCreateOrConnectWithoutAssignmentInput | TestAnswerFirstCreateOrConnectWithoutAssignmentInput[]
    createMany?: TestAnswerFirstCreateManyAssignmentInputEnvelope
    connect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
  }

  export type AssignmentFieldUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentFieldCreateWithoutAssignmentInput, AssignmentFieldUncheckedCreateWithoutAssignmentInput> | AssignmentFieldCreateWithoutAssignmentInput[] | AssignmentFieldUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentFieldCreateOrConnectWithoutAssignmentInput | AssignmentFieldCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentFieldCreateManyAssignmentInputEnvelope
    connect?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
  }

  export type AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput> | AssignmentSubmissionCreateWithoutAssignmentInput[] | AssignmentSubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutAssignmentInput | AssignmentSubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentSubmissionCreateManyAssignmentInputEnvelope
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
  }

  export type TestAnswerFirstUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<TestAnswerFirstCreateWithoutAssignmentInput, TestAnswerFirstUncheckedCreateWithoutAssignmentInput> | TestAnswerFirstCreateWithoutAssignmentInput[] | TestAnswerFirstUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TestAnswerFirstCreateOrConnectWithoutAssignmentInput | TestAnswerFirstCreateOrConnectWithoutAssignmentInput[]
    createMany?: TestAnswerFirstCreateManyAssignmentInputEnvelope
    connect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LessonUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<LessonCreateWithoutAssignmentsInput, LessonUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutAssignmentsInput
    upsert?: LessonUpsertWithoutAssignmentsInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutAssignmentsInput, LessonUpdateWithoutAssignmentsInput>, LessonUncheckedUpdateWithoutAssignmentsInput>
  }

  export type AssignmentFieldUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentFieldCreateWithoutAssignmentInput, AssignmentFieldUncheckedCreateWithoutAssignmentInput> | AssignmentFieldCreateWithoutAssignmentInput[] | AssignmentFieldUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentFieldCreateOrConnectWithoutAssignmentInput | AssignmentFieldCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentFieldUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentFieldUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentFieldCreateManyAssignmentInputEnvelope
    set?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
    disconnect?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
    delete?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
    connect?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
    update?: AssignmentFieldUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentFieldUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentFieldUpdateManyWithWhereWithoutAssignmentInput | AssignmentFieldUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentFieldScalarWhereInput | AssignmentFieldScalarWhereInput[]
  }

  export type AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput> | AssignmentSubmissionCreateWithoutAssignmentInput[] | AssignmentSubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutAssignmentInput | AssignmentSubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentSubmissionCreateManyAssignmentInputEnvelope
    set?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    disconnect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    delete?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    update?: AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput | AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
  }

  export type TestAnswerFirstUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<TestAnswerFirstCreateWithoutAssignmentInput, TestAnswerFirstUncheckedCreateWithoutAssignmentInput> | TestAnswerFirstCreateWithoutAssignmentInput[] | TestAnswerFirstUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TestAnswerFirstCreateOrConnectWithoutAssignmentInput | TestAnswerFirstCreateOrConnectWithoutAssignmentInput[]
    upsert?: TestAnswerFirstUpsertWithWhereUniqueWithoutAssignmentInput | TestAnswerFirstUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: TestAnswerFirstCreateManyAssignmentInputEnvelope
    set?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    disconnect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    delete?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    connect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    update?: TestAnswerFirstUpdateWithWhereUniqueWithoutAssignmentInput | TestAnswerFirstUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: TestAnswerFirstUpdateManyWithWhereWithoutAssignmentInput | TestAnswerFirstUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: TestAnswerFirstScalarWhereInput | TestAnswerFirstScalarWhereInput[]
  }

  export type AssignmentFieldUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentFieldCreateWithoutAssignmentInput, AssignmentFieldUncheckedCreateWithoutAssignmentInput> | AssignmentFieldCreateWithoutAssignmentInput[] | AssignmentFieldUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentFieldCreateOrConnectWithoutAssignmentInput | AssignmentFieldCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentFieldUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentFieldUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentFieldCreateManyAssignmentInputEnvelope
    set?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
    disconnect?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
    delete?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
    connect?: AssignmentFieldWhereUniqueInput | AssignmentFieldWhereUniqueInput[]
    update?: AssignmentFieldUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentFieldUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentFieldUpdateManyWithWhereWithoutAssignmentInput | AssignmentFieldUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentFieldScalarWhereInput | AssignmentFieldScalarWhereInput[]
  }

  export type AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput> | AssignmentSubmissionCreateWithoutAssignmentInput[] | AssignmentSubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutAssignmentInput | AssignmentSubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentSubmissionCreateManyAssignmentInputEnvelope
    set?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    disconnect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    delete?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    update?: AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput | AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
  }

  export type TestAnswerFirstUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<TestAnswerFirstCreateWithoutAssignmentInput, TestAnswerFirstUncheckedCreateWithoutAssignmentInput> | TestAnswerFirstCreateWithoutAssignmentInput[] | TestAnswerFirstUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TestAnswerFirstCreateOrConnectWithoutAssignmentInput | TestAnswerFirstCreateOrConnectWithoutAssignmentInput[]
    upsert?: TestAnswerFirstUpsertWithWhereUniqueWithoutAssignmentInput | TestAnswerFirstUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: TestAnswerFirstCreateManyAssignmentInputEnvelope
    set?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    disconnect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    delete?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    connect?: TestAnswerFirstWhereUniqueInput | TestAnswerFirstWhereUniqueInput[]
    update?: TestAnswerFirstUpdateWithWhereUniqueWithoutAssignmentInput | TestAnswerFirstUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: TestAnswerFirstUpdateManyWithWhereWithoutAssignmentInput | TestAnswerFirstUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: TestAnswerFirstScalarWhereInput | TestAnswerFirstScalarWhereInput[]
  }

  export type AssignmentCreateNestedOneWithoutFieldsInput = {
    create?: XOR<AssignmentCreateWithoutFieldsInput, AssignmentUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutFieldsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type AssignmentUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<AssignmentCreateWithoutFieldsInput, AssignmentUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutFieldsInput
    upsert?: AssignmentUpsertWithoutFieldsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutFieldsInput, AssignmentUpdateWithoutFieldsInput>, AssignmentUncheckedUpdateWithoutFieldsInput>
  }

  export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionsInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    upsert?: AssignmentUpsertWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutSubmissionsInput, AssignmentUpdateWithoutSubmissionsInput>, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type StudentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionsInput
    upsert?: StudentUpsertWithoutSubmissionsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSubmissionsInput, StudentUpdateWithoutSubmissionsInput>, StudentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type StudentCreateNestedOneWithoutTestAnswerFirstsInput = {
    create?: XOR<StudentCreateWithoutTestAnswerFirstsInput, StudentUncheckedCreateWithoutTestAnswerFirstsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutTestAnswerFirstsInput
    connect?: StudentWhereUniqueInput
  }

  export type AssignmentCreateNestedOneWithoutTestAnswerFirstsInput = {
    create?: XOR<AssignmentCreateWithoutTestAnswerFirstsInput, AssignmentUncheckedCreateWithoutTestAnswerFirstsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutTestAnswerFirstsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutTestAnswerFirstsNestedInput = {
    create?: XOR<StudentCreateWithoutTestAnswerFirstsInput, StudentUncheckedCreateWithoutTestAnswerFirstsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutTestAnswerFirstsInput
    upsert?: StudentUpsertWithoutTestAnswerFirstsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutTestAnswerFirstsInput, StudentUpdateWithoutTestAnswerFirstsInput>, StudentUncheckedUpdateWithoutTestAnswerFirstsInput>
  }

  export type AssignmentUpdateOneRequiredWithoutTestAnswerFirstsNestedInput = {
    create?: XOR<AssignmentCreateWithoutTestAnswerFirstsInput, AssignmentUncheckedCreateWithoutTestAnswerFirstsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutTestAnswerFirstsInput
    upsert?: AssignmentUpsertWithoutTestAnswerFirstsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutTestAnswerFirstsInput, AssignmentUpdateWithoutTestAnswerFirstsInput>, AssignmentUncheckedUpdateWithoutTestAnswerFirstsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StudentCreateWithoutSchoolInput = {
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
    testAnswerFirsts?: TestAnswerFirstCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSchoolInput = {
    id?: number
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
    testAnswerFirsts?: TestAnswerFirstUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentCreateManySchoolInputEnvelope = {
    data: StudentCreateManySchoolInput | StudentCreateManySchoolInput[]
  }

  export type TeacherSchoolCreateWithoutSchoolInput = {
    teacher: TeacherCreateNestedOneWithoutSchoolsInput
  }

  export type TeacherSchoolUncheckedCreateWithoutSchoolInput = {
    id?: number
    teacherId: number
  }

  export type TeacherSchoolCreateOrConnectWithoutSchoolInput = {
    where: TeacherSchoolWhereUniqueInput
    create: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput>
  }

  export type TeacherSchoolCreateManySchoolInputEnvelope = {
    data: TeacherSchoolCreateManySchoolInput | TeacherSchoolCreateManySchoolInput[]
  }

  export type StudentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
  }

  export type StudentUpdateManyWithWhereWithoutSchoolInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    surname?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    patronymic?: StringNullableFilter<"Student"> | string | null
    phone?: StringFilter<"Student"> | string
    passwordHash?: StringFilter<"Student"> | string
    schoolId?: IntFilter<"Student"> | number
    className?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput = {
    where: TeacherSchoolWhereUniqueInput
    update: XOR<TeacherSchoolUpdateWithoutSchoolInput, TeacherSchoolUncheckedUpdateWithoutSchoolInput>
    create: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput>
  }

  export type TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput = {
    where: TeacherSchoolWhereUniqueInput
    data: XOR<TeacherSchoolUpdateWithoutSchoolInput, TeacherSchoolUncheckedUpdateWithoutSchoolInput>
  }

  export type TeacherSchoolUpdateManyWithWhereWithoutSchoolInput = {
    where: TeacherSchoolScalarWhereInput
    data: XOR<TeacherSchoolUpdateManyMutationInput, TeacherSchoolUncheckedUpdateManyWithoutSchoolInput>
  }

  export type TeacherSchoolScalarWhereInput = {
    AND?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
    OR?: TeacherSchoolScalarWhereInput[]
    NOT?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
    id?: IntFilter<"TeacherSchool"> | number
    teacherId?: IntFilter<"TeacherSchool"> | number
    schoolId?: IntFilter<"TeacherSchool"> | number
  }

  export type SchoolCreateWithoutStudentsInput = {
    name: string
    code?: string | null
    teachers?: TeacherSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    code?: string | null
    teachers?: TeacherSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutStudentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
  }

  export type AttemptCreateWithoutStudentInput = {
    score?: number | null
    completedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutAttemptsInput
  }

  export type AttemptUncheckedCreateWithoutStudentInput = {
    id?: number
    lessonId: number
    score?: number | null
    completedAt?: Date | string
  }

  export type AttemptCreateOrConnectWithoutStudentInput = {
    where: AttemptWhereUniqueInput
    create: XOR<AttemptCreateWithoutStudentInput, AttemptUncheckedCreateWithoutStudentInput>
  }

  export type AttemptCreateManyStudentInputEnvelope = {
    data: AttemptCreateManyStudentInput | AttemptCreateManyStudentInput[]
  }

  export type AssignmentSubmissionCreateWithoutStudentInput = {
    status?: string
    answersJson: string
    score?: number | null
    gradingJson?: string | null
    feedback?: string | null
    submittedAt?: Date | string | null
    checkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
  }

  export type AssignmentSubmissionUncheckedCreateWithoutStudentInput = {
    id?: number
    assignmentId: number
    status?: string
    answersJson: string
    score?: number | null
    gradingJson?: string | null
    feedback?: string | null
    submittedAt?: Date | string | null
    checkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentSubmissionCreateOrConnectWithoutStudentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    create: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type AssignmentSubmissionCreateManyStudentInputEnvelope = {
    data: AssignmentSubmissionCreateManyStudentInput | AssignmentSubmissionCreateManyStudentInput[]
  }

  export type TestAnswerFirstCreateWithoutStudentInput = {
    blockId: string
    optionKey: string
    createdAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutTestAnswerFirstsInput
  }

  export type TestAnswerFirstUncheckedCreateWithoutStudentInput = {
    id?: number
    assignmentId: number
    blockId: string
    optionKey: string
    createdAt?: Date | string
  }

  export type TestAnswerFirstCreateOrConnectWithoutStudentInput = {
    where: TestAnswerFirstWhereUniqueInput
    create: XOR<TestAnswerFirstCreateWithoutStudentInput, TestAnswerFirstUncheckedCreateWithoutStudentInput>
  }

  export type TestAnswerFirstCreateManyStudentInputEnvelope = {
    data: TestAnswerFirstCreateManyStudentInput | TestAnswerFirstCreateManyStudentInput[]
  }

  export type SchoolUpsertWithoutStudentsInput = {
    update: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutStudentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type SchoolUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teachers?: TeacherSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teachers?: TeacherSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type AttemptUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttemptWhereUniqueInput
    update: XOR<AttemptUpdateWithoutStudentInput, AttemptUncheckedUpdateWithoutStudentInput>
    create: XOR<AttemptCreateWithoutStudentInput, AttemptUncheckedCreateWithoutStudentInput>
  }

  export type AttemptUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttemptWhereUniqueInput
    data: XOR<AttemptUpdateWithoutStudentInput, AttemptUncheckedUpdateWithoutStudentInput>
  }

  export type AttemptUpdateManyWithWhereWithoutStudentInput = {
    where: AttemptScalarWhereInput
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttemptScalarWhereInput = {
    AND?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    OR?: AttemptScalarWhereInput[]
    NOT?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    id?: IntFilter<"Attempt"> | number
    studentId?: IntFilter<"Attempt"> | number
    lessonId?: IntFilter<"Attempt"> | number
    score?: IntNullableFilter<"Attempt"> | number | null
    completedAt?: DateTimeFilter<"Attempt"> | Date | string
  }

  export type AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    update: XOR<AssignmentSubmissionUpdateWithoutStudentInput, AssignmentSubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    data: XOR<AssignmentSubmissionUpdateWithoutStudentInput, AssignmentSubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: AssignmentSubmissionScalarWhereInput
    data: XOR<AssignmentSubmissionUpdateManyMutationInput, AssignmentSubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type AssignmentSubmissionScalarWhereInput = {
    AND?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
    OR?: AssignmentSubmissionScalarWhereInput[]
    NOT?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
    id?: IntFilter<"AssignmentSubmission"> | number
    assignmentId?: IntFilter<"AssignmentSubmission"> | number
    studentId?: IntFilter<"AssignmentSubmission"> | number
    status?: StringFilter<"AssignmentSubmission"> | string
    answersJson?: StringFilter<"AssignmentSubmission"> | string
    score?: IntNullableFilter<"AssignmentSubmission"> | number | null
    gradingJson?: StringNullableFilter<"AssignmentSubmission"> | string | null
    feedback?: StringNullableFilter<"AssignmentSubmission"> | string | null
    submittedAt?: DateTimeNullableFilter<"AssignmentSubmission"> | Date | string | null
    checkedAt?: DateTimeNullableFilter<"AssignmentSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"AssignmentSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"AssignmentSubmission"> | Date | string
  }

  export type TestAnswerFirstUpsertWithWhereUniqueWithoutStudentInput = {
    where: TestAnswerFirstWhereUniqueInput
    update: XOR<TestAnswerFirstUpdateWithoutStudentInput, TestAnswerFirstUncheckedUpdateWithoutStudentInput>
    create: XOR<TestAnswerFirstCreateWithoutStudentInput, TestAnswerFirstUncheckedCreateWithoutStudentInput>
  }

  export type TestAnswerFirstUpdateWithWhereUniqueWithoutStudentInput = {
    where: TestAnswerFirstWhereUniqueInput
    data: XOR<TestAnswerFirstUpdateWithoutStudentInput, TestAnswerFirstUncheckedUpdateWithoutStudentInput>
  }

  export type TestAnswerFirstUpdateManyWithWhereWithoutStudentInput = {
    where: TestAnswerFirstScalarWhereInput
    data: XOR<TestAnswerFirstUpdateManyMutationInput, TestAnswerFirstUncheckedUpdateManyWithoutStudentInput>
  }

  export type TestAnswerFirstScalarWhereInput = {
    AND?: TestAnswerFirstScalarWhereInput | TestAnswerFirstScalarWhereInput[]
    OR?: TestAnswerFirstScalarWhereInput[]
    NOT?: TestAnswerFirstScalarWhereInput | TestAnswerFirstScalarWhereInput[]
    id?: IntFilter<"TestAnswerFirst"> | number
    studentId?: IntFilter<"TestAnswerFirst"> | number
    assignmentId?: IntFilter<"TestAnswerFirst"> | number
    blockId?: StringFilter<"TestAnswerFirst"> | string
    optionKey?: StringFilter<"TestAnswerFirst"> | string
    createdAt?: DateTimeFilter<"TestAnswerFirst"> | Date | string
  }

  export type TeacherSchoolCreateWithoutTeacherInput = {
    school: SchoolCreateNestedOneWithoutTeachersInput
  }

  export type TeacherSchoolUncheckedCreateWithoutTeacherInput = {
    id?: number
    schoolId: number
  }

  export type TeacherSchoolCreateOrConnectWithoutTeacherInput = {
    where: TeacherSchoolWhereUniqueInput
    create: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSchoolCreateManyTeacherInputEnvelope = {
    data: TeacherSchoolCreateManyTeacherInput | TeacherSchoolCreateManyTeacherInput[]
  }

  export type TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSchoolWhereUniqueInput
    update: XOR<TeacherSchoolUpdateWithoutTeacherInput, TeacherSchoolUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSchoolWhereUniqueInput
    data: XOR<TeacherSchoolUpdateWithoutTeacherInput, TeacherSchoolUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherSchoolUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherSchoolScalarWhereInput
    data: XOR<TeacherSchoolUpdateManyMutationInput, TeacherSchoolUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherCreateWithoutSchoolsInput = {
    emailOrPhone: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherUncheckedCreateWithoutSchoolsInput = {
    id?: number
    emailOrPhone: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherCreateOrConnectWithoutSchoolsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSchoolsInput, TeacherUncheckedCreateWithoutSchoolsInput>
  }

  export type SchoolCreateWithoutTeachersInput = {
    name: string
    code?: string | null
    students?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutTeachersInput = {
    id?: number
    name: string
    code?: string | null
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutTeachersInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutTeachersInput, SchoolUncheckedCreateWithoutTeachersInput>
  }

  export type TeacherUpsertWithoutSchoolsInput = {
    update: XOR<TeacherUpdateWithoutSchoolsInput, TeacherUncheckedUpdateWithoutSchoolsInput>
    create: XOR<TeacherCreateWithoutSchoolsInput, TeacherUncheckedCreateWithoutSchoolsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSchoolsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSchoolsInput, TeacherUncheckedUpdateWithoutSchoolsInput>
  }

  export type TeacherUpdateWithoutSchoolsInput = {
    emailOrPhone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateWithoutSchoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    emailOrPhone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUpsertWithoutTeachersInput = {
    update: XOR<SchoolUpdateWithoutTeachersInput, SchoolUncheckedUpdateWithoutTeachersInput>
    create: XOR<SchoolCreateWithoutTeachersInput, SchoolUncheckedCreateWithoutTeachersInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutTeachersInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutTeachersInput, SchoolUncheckedUpdateWithoutTeachersInput>
  }

  export type SchoolUpdateWithoutTeachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type LessonCreateWithoutCourseInput = {
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptCreateNestedManyWithoutLessonInput
    assignments?: AssignmentCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutLessonInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCourseInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonCreateManyCourseInputEnvelope = {
    data: LessonCreateManyCourseInput | LessonCreateManyCourseInput[]
  }

  export type LessonUpsertWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
  }

  export type LessonUpdateManyWithWhereWithoutCourseInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCourseInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: IntFilter<"Lesson"> | number
    courseId?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type CourseCreateWithoutLessonsInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUncheckedCreateWithoutLessonsInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutLessonsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
  }

  export type AttemptCreateWithoutLessonInput = {
    score?: number | null
    completedAt?: Date | string
    student: StudentCreateNestedOneWithoutAttemptsInput
  }

  export type AttemptUncheckedCreateWithoutLessonInput = {
    id?: number
    studentId: number
    score?: number | null
    completedAt?: Date | string
  }

  export type AttemptCreateOrConnectWithoutLessonInput = {
    where: AttemptWhereUniqueInput
    create: XOR<AttemptCreateWithoutLessonInput, AttemptUncheckedCreateWithoutLessonInput>
  }

  export type AttemptCreateManyLessonInputEnvelope = {
    data: AttemptCreateManyLessonInput | AttemptCreateManyLessonInput[]
  }

  export type AssignmentCreateWithoutLessonInput = {
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: AssignmentFieldCreateNestedManyWithoutAssignmentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutAssignmentInput
    testAnswerFirsts?: TestAnswerFirstCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutLessonInput = {
    id?: number
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: AssignmentFieldUncheckedCreateNestedManyWithoutAssignmentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    testAnswerFirsts?: TestAnswerFirstUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutLessonInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutLessonInput, AssignmentUncheckedCreateWithoutLessonInput>
  }

  export type AssignmentCreateManyLessonInputEnvelope = {
    data: AssignmentCreateManyLessonInput | AssignmentCreateManyLessonInput[]
  }

  export type CourseUpsertWithoutLessonsInput = {
    update: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseUpdateWithoutLessonsInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateWithoutLessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUpsertWithWhereUniqueWithoutLessonInput = {
    where: AttemptWhereUniqueInput
    update: XOR<AttemptUpdateWithoutLessonInput, AttemptUncheckedUpdateWithoutLessonInput>
    create: XOR<AttemptCreateWithoutLessonInput, AttemptUncheckedCreateWithoutLessonInput>
  }

  export type AttemptUpdateWithWhereUniqueWithoutLessonInput = {
    where: AttemptWhereUniqueInput
    data: XOR<AttemptUpdateWithoutLessonInput, AttemptUncheckedUpdateWithoutLessonInput>
  }

  export type AttemptUpdateManyWithWhereWithoutLessonInput = {
    where: AttemptScalarWhereInput
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyWithoutLessonInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutLessonInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutLessonInput, AssignmentUncheckedUpdateWithoutLessonInput>
    create: XOR<AssignmentCreateWithoutLessonInput, AssignmentUncheckedCreateWithoutLessonInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutLessonInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutLessonInput, AssignmentUncheckedUpdateWithoutLessonInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutLessonInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutLessonInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: IntFilter<"Assignment"> | number
    lessonId?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    goal?: StringNullableFilter<"Assignment"> | string | null
    instruction?: StringFilter<"Assignment"> | string
    taskType?: StringFilter<"Assignment"> | string
    answerFormat?: StringFilter<"Assignment"> | string
    gradingMode?: StringFilter<"Assignment"> | string
    maxScore?: IntNullableFilter<"Assignment"> | number | null
    order?: IntFilter<"Assignment"> | number
    isPublished?: BoolFilter<"Assignment"> | boolean
    configJson?: StringNullableFilter<"Assignment"> | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type StudentCreateWithoutAttemptsInput = {
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
    testAnswerFirsts?: TestAnswerFirstCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttemptsInput = {
    id?: number
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    schoolId: number
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
    testAnswerFirsts?: TestAnswerFirstUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttemptsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttemptsInput, StudentUncheckedCreateWithoutAttemptsInput>
  }

  export type LessonCreateWithoutAttemptsInput = {
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutLessonsInput
    assignments?: AssignmentCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutAttemptsInput = {
    id?: number
    courseId: number
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutAttemptsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutAttemptsInput, LessonUncheckedCreateWithoutAttemptsInput>
  }

  export type StudentUpsertWithoutAttemptsInput = {
    update: XOR<StudentUpdateWithoutAttemptsInput, StudentUncheckedUpdateWithoutAttemptsInput>
    create: XOR<StudentCreateWithoutAttemptsInput, StudentUncheckedCreateWithoutAttemptsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttemptsInput, StudentUncheckedUpdateWithoutAttemptsInput>
  }

  export type StudentUpdateWithoutAttemptsInput = {
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
    testAnswerFirsts?: TestAnswerFirstUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    schoolId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    testAnswerFirsts?: TestAnswerFirstUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type LessonUpsertWithoutAttemptsInput = {
    update: XOR<LessonUpdateWithoutAttemptsInput, LessonUncheckedUpdateWithoutAttemptsInput>
    create: XOR<LessonCreateWithoutAttemptsInput, LessonUncheckedCreateWithoutAttemptsInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutAttemptsInput, LessonUncheckedUpdateWithoutAttemptsInput>
  }

  export type LessonUpdateWithoutAttemptsInput = {
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    assignments?: AssignmentUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutAttemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateWithoutAssignmentsInput = {
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutLessonsInput
    attempts?: AttemptCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    courseId: number
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutAssignmentsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutAssignmentsInput, LessonUncheckedCreateWithoutAssignmentsInput>
  }

  export type AssignmentFieldCreateWithoutAssignmentInput = {
    fieldKey: string
    label: string
    fieldType: string
    required?: boolean
    order?: number
    optionsJson?: string | null
    rulesJson?: string | null
  }

  export type AssignmentFieldUncheckedCreateWithoutAssignmentInput = {
    id?: number
    fieldKey: string
    label: string
    fieldType: string
    required?: boolean
    order?: number
    optionsJson?: string | null
    rulesJson?: string | null
  }

  export type AssignmentFieldCreateOrConnectWithoutAssignmentInput = {
    where: AssignmentFieldWhereUniqueInput
    create: XOR<AssignmentFieldCreateWithoutAssignmentInput, AssignmentFieldUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentFieldCreateManyAssignmentInputEnvelope = {
    data: AssignmentFieldCreateManyAssignmentInput | AssignmentFieldCreateManyAssignmentInput[]
  }

  export type AssignmentSubmissionCreateWithoutAssignmentInput = {
    status?: string
    answersJson: string
    score?: number | null
    gradingJson?: string | null
    feedback?: string | null
    submittedAt?: Date | string | null
    checkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutSubmissionsInput
  }

  export type AssignmentSubmissionUncheckedCreateWithoutAssignmentInput = {
    id?: number
    studentId: number
    status?: string
    answersJson: string
    score?: number | null
    gradingJson?: string | null
    feedback?: string | null
    submittedAt?: Date | string | null
    checkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentSubmissionCreateOrConnectWithoutAssignmentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    create: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentSubmissionCreateManyAssignmentInputEnvelope = {
    data: AssignmentSubmissionCreateManyAssignmentInput | AssignmentSubmissionCreateManyAssignmentInput[]
  }

  export type TestAnswerFirstCreateWithoutAssignmentInput = {
    blockId: string
    optionKey: string
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutTestAnswerFirstsInput
  }

  export type TestAnswerFirstUncheckedCreateWithoutAssignmentInput = {
    id?: number
    studentId: number
    blockId: string
    optionKey: string
    createdAt?: Date | string
  }

  export type TestAnswerFirstCreateOrConnectWithoutAssignmentInput = {
    where: TestAnswerFirstWhereUniqueInput
    create: XOR<TestAnswerFirstCreateWithoutAssignmentInput, TestAnswerFirstUncheckedCreateWithoutAssignmentInput>
  }

  export type TestAnswerFirstCreateManyAssignmentInputEnvelope = {
    data: TestAnswerFirstCreateManyAssignmentInput | TestAnswerFirstCreateManyAssignmentInput[]
  }

  export type LessonUpsertWithoutAssignmentsInput = {
    update: XOR<LessonUpdateWithoutAssignmentsInput, LessonUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<LessonCreateWithoutAssignmentsInput, LessonUncheckedCreateWithoutAssignmentsInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutAssignmentsInput, LessonUncheckedUpdateWithoutAssignmentsInput>
  }

  export type LessonUpdateWithoutAssignmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    attempts?: AttemptUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type AssignmentFieldUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentFieldWhereUniqueInput
    update: XOR<AssignmentFieldUpdateWithoutAssignmentInput, AssignmentFieldUncheckedUpdateWithoutAssignmentInput>
    create: XOR<AssignmentFieldCreateWithoutAssignmentInput, AssignmentFieldUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentFieldUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentFieldWhereUniqueInput
    data: XOR<AssignmentFieldUpdateWithoutAssignmentInput, AssignmentFieldUncheckedUpdateWithoutAssignmentInput>
  }

  export type AssignmentFieldUpdateManyWithWhereWithoutAssignmentInput = {
    where: AssignmentFieldScalarWhereInput
    data: XOR<AssignmentFieldUpdateManyMutationInput, AssignmentFieldUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type AssignmentFieldScalarWhereInput = {
    AND?: AssignmentFieldScalarWhereInput | AssignmentFieldScalarWhereInput[]
    OR?: AssignmentFieldScalarWhereInput[]
    NOT?: AssignmentFieldScalarWhereInput | AssignmentFieldScalarWhereInput[]
    id?: IntFilter<"AssignmentField"> | number
    assignmentId?: IntFilter<"AssignmentField"> | number
    fieldKey?: StringFilter<"AssignmentField"> | string
    label?: StringFilter<"AssignmentField"> | string
    fieldType?: StringFilter<"AssignmentField"> | string
    required?: BoolFilter<"AssignmentField"> | boolean
    order?: IntFilter<"AssignmentField"> | number
    optionsJson?: StringNullableFilter<"AssignmentField"> | string | null
    rulesJson?: StringNullableFilter<"AssignmentField"> | string | null
  }

  export type AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    update: XOR<AssignmentSubmissionUpdateWithoutAssignmentInput, AssignmentSubmissionUncheckedUpdateWithoutAssignmentInput>
    create: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    data: XOR<AssignmentSubmissionUpdateWithoutAssignmentInput, AssignmentSubmissionUncheckedUpdateWithoutAssignmentInput>
  }

  export type AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput = {
    where: AssignmentSubmissionScalarWhereInput
    data: XOR<AssignmentSubmissionUpdateManyMutationInput, AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type TestAnswerFirstUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: TestAnswerFirstWhereUniqueInput
    update: XOR<TestAnswerFirstUpdateWithoutAssignmentInput, TestAnswerFirstUncheckedUpdateWithoutAssignmentInput>
    create: XOR<TestAnswerFirstCreateWithoutAssignmentInput, TestAnswerFirstUncheckedCreateWithoutAssignmentInput>
  }

  export type TestAnswerFirstUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: TestAnswerFirstWhereUniqueInput
    data: XOR<TestAnswerFirstUpdateWithoutAssignmentInput, TestAnswerFirstUncheckedUpdateWithoutAssignmentInput>
  }

  export type TestAnswerFirstUpdateManyWithWhereWithoutAssignmentInput = {
    where: TestAnswerFirstScalarWhereInput
    data: XOR<TestAnswerFirstUpdateManyMutationInput, TestAnswerFirstUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type AssignmentCreateWithoutFieldsInput = {
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutAssignmentsInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutAssignmentInput
    testAnswerFirsts?: TestAnswerFirstCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutFieldsInput = {
    id?: number
    lessonId: number
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    testAnswerFirsts?: TestAnswerFirstUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutFieldsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutFieldsInput, AssignmentUncheckedCreateWithoutFieldsInput>
  }

  export type AssignmentUpsertWithoutFieldsInput = {
    update: XOR<AssignmentUpdateWithoutFieldsInput, AssignmentUncheckedUpdateWithoutFieldsInput>
    create: XOR<AssignmentCreateWithoutFieldsInput, AssignmentUncheckedCreateWithoutFieldsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutFieldsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutFieldsInput, AssignmentUncheckedUpdateWithoutFieldsInput>
  }

  export type AssignmentUpdateWithoutFieldsInput = {
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput
    testAnswerFirsts?: TestAnswerFirstUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    testAnswerFirsts?: TestAnswerFirstUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateWithoutSubmissionsInput = {
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutAssignmentsInput
    fields?: AssignmentFieldCreateNestedManyWithoutAssignmentInput
    testAnswerFirsts?: TestAnswerFirstCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    lessonId: number
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: AssignmentFieldUncheckedCreateNestedManyWithoutAssignmentInput
    testAnswerFirsts?: TestAnswerFirstUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type StudentCreateWithoutSubmissionsInput = {
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    attempts?: AttemptCreateNestedManyWithoutStudentInput
    testAnswerFirsts?: TestAnswerFirstCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    schoolId: number
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutStudentInput
    testAnswerFirsts?: TestAnswerFirstUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSubmissionsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
  }

  export type AssignmentUpsertWithoutSubmissionsInput = {
    update: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssignmentUpdateWithoutSubmissionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutAssignmentsNestedInput
    fields?: AssignmentFieldUpdateManyWithoutAssignmentNestedInput
    testAnswerFirsts?: TestAnswerFirstUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: AssignmentFieldUncheckedUpdateManyWithoutAssignmentNestedInput
    testAnswerFirsts?: TestAnswerFirstUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type StudentUpsertWithoutSubmissionsInput = {
    update: XOR<StudentUpdateWithoutSubmissionsInput, StudentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSubmissionsInput, StudentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type StudentUpdateWithoutSubmissionsInput = {
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    attempts?: AttemptUpdateManyWithoutStudentNestedInput
    testAnswerFirsts?: TestAnswerFirstUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    schoolId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutStudentNestedInput
    testAnswerFirsts?: TestAnswerFirstUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutTestAnswerFirstsInput = {
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    attempts?: AttemptCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutTestAnswerFirstsInput = {
    id?: number
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    schoolId: number
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutTestAnswerFirstsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutTestAnswerFirstsInput, StudentUncheckedCreateWithoutTestAnswerFirstsInput>
  }

  export type AssignmentCreateWithoutTestAnswerFirstsInput = {
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutAssignmentsInput
    fields?: AssignmentFieldCreateNestedManyWithoutAssignmentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutTestAnswerFirstsInput = {
    id?: number
    lessonId: number
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: AssignmentFieldUncheckedCreateNestedManyWithoutAssignmentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutTestAnswerFirstsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutTestAnswerFirstsInput, AssignmentUncheckedCreateWithoutTestAnswerFirstsInput>
  }

  export type StudentUpsertWithoutTestAnswerFirstsInput = {
    update: XOR<StudentUpdateWithoutTestAnswerFirstsInput, StudentUncheckedUpdateWithoutTestAnswerFirstsInput>
    create: XOR<StudentCreateWithoutTestAnswerFirstsInput, StudentUncheckedCreateWithoutTestAnswerFirstsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutTestAnswerFirstsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutTestAnswerFirstsInput, StudentUncheckedUpdateWithoutTestAnswerFirstsInput>
  }

  export type StudentUpdateWithoutTestAnswerFirstsInput = {
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    attempts?: AttemptUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutTestAnswerFirstsInput = {
    id?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    schoolId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AssignmentUpsertWithoutTestAnswerFirstsInput = {
    update: XOR<AssignmentUpdateWithoutTestAnswerFirstsInput, AssignmentUncheckedUpdateWithoutTestAnswerFirstsInput>
    create: XOR<AssignmentCreateWithoutTestAnswerFirstsInput, AssignmentUncheckedCreateWithoutTestAnswerFirstsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutTestAnswerFirstsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutTestAnswerFirstsInput, AssignmentUncheckedUpdateWithoutTestAnswerFirstsInput>
  }

  export type AssignmentUpdateWithoutTestAnswerFirstsInput = {
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutAssignmentsNestedInput
    fields?: AssignmentFieldUpdateManyWithoutAssignmentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutTestAnswerFirstsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: AssignmentFieldUncheckedUpdateManyWithoutAssignmentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type StudentCreateManySchoolInput = {
    id?: number
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    passwordHash: string
    className: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherSchoolCreateManySchoolInput = {
    id?: number
    teacherId: number
  }

  export type StudentUpdateWithoutSchoolInput = {
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
    testAnswerFirsts?: TestAnswerFirstUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    testAnswerFirsts?: TestAnswerFirstUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSchoolUpdateWithoutSchoolInput = {
    teacher?: TeacherUpdateOneRequiredWithoutSchoolsNestedInput
  }

  export type TeacherSchoolUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSchoolUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type AttemptCreateManyStudentInput = {
    id?: number
    lessonId: number
    score?: number | null
    completedAt?: Date | string
  }

  export type AssignmentSubmissionCreateManyStudentInput = {
    id?: number
    assignmentId: number
    status?: string
    answersJson: string
    score?: number | null
    gradingJson?: string | null
    feedback?: string | null
    submittedAt?: Date | string | null
    checkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestAnswerFirstCreateManyStudentInput = {
    id?: number
    assignmentId: number
    blockId: string
    optionKey: string
    createdAt?: Date | string
  }

  export type AttemptUpdateWithoutStudentInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AttemptUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionUpdateWithoutStudentInput = {
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AssignmentSubmissionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAnswerFirstUpdateWithoutStudentInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutTestAnswerFirstsNestedInput
  }

  export type TestAnswerFirstUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAnswerFirstUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSchoolCreateManyTeacherInput = {
    id?: number
    schoolId: number
  }

  export type TeacherSchoolUpdateWithoutTeacherInput = {
    school?: SchoolUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherSchoolUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSchoolUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateManyCourseInput = {
    id?: number
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUpdateManyWithoutLessonNestedInput
    assignments?: AssignmentUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutLessonNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateManyLessonInput = {
    id?: number
    studentId: number
    score?: number | null
    completedAt?: Date | string
  }

  export type AssignmentCreateManyLessonInput = {
    id?: number
    title: string
    goal?: string | null
    instruction: string
    taskType: string
    answerFormat: string
    gradingMode?: string
    maxScore?: number | null
    order?: number
    isPublished?: boolean
    configJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttemptUpdateWithoutLessonInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AttemptUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateManyWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutLessonInput = {
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: AssignmentFieldUpdateManyWithoutAssignmentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput
    testAnswerFirsts?: TestAnswerFirstUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: AssignmentFieldUncheckedUpdateManyWithoutAssignmentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    testAnswerFirsts?: TestAnswerFirstUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    instruction?: StringFieldUpdateOperationsInput | string
    taskType?: StringFieldUpdateOperationsInput | string
    answerFormat?: StringFieldUpdateOperationsInput | string
    gradingMode?: StringFieldUpdateOperationsInput | string
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    configJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentFieldCreateManyAssignmentInput = {
    id?: number
    fieldKey: string
    label: string
    fieldType: string
    required?: boolean
    order?: number
    optionsJson?: string | null
    rulesJson?: string | null
  }

  export type AssignmentSubmissionCreateManyAssignmentInput = {
    id?: number
    studentId: number
    status?: string
    answersJson: string
    score?: number | null
    gradingJson?: string | null
    feedback?: string | null
    submittedAt?: Date | string | null
    checkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestAnswerFirstCreateManyAssignmentInput = {
    id?: number
    studentId: number
    blockId: string
    optionKey: string
    createdAt?: Date | string
  }

  export type AssignmentFieldUpdateWithoutAssignmentInput = {
    fieldKey?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    optionsJson?: NullableStringFieldUpdateOperationsInput | string | null
    rulesJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentFieldUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldKey?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    optionsJson?: NullableStringFieldUpdateOperationsInput | string | null
    rulesJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentFieldUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldKey?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    optionsJson?: NullableStringFieldUpdateOperationsInput | string | null
    rulesJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentSubmissionUpdateWithoutAssignmentInput = {
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AssignmentSubmissionUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answersJson?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAnswerFirstUpdateWithoutAssignmentInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutTestAnswerFirstsNestedInput
  }

  export type TestAnswerFirstUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAnswerFirstUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    blockId?: StringFieldUpdateOperationsInput | string
    optionKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}