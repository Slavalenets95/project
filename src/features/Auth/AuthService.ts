import Http from '../../app/Http'

class AuthService {
  public static login(authCredentialsDto: AuthCredentialsDto) {
    return Http.post<AuthDto>('api/auth/login', authCredentialsDto)
  }
}

export interface AuthCredentialsDto {
  email: string
  password: string
}

export interface AuthDto {
  user: UserDto
  email: string
  token: string
}

export interface UserDto {
  id: number
  email: string
  password?: string
  firstName: string | null
  lastName: string | null
  phoneNumber: string | null
  userGender: string | null
  birthdayDate: string | null
  registerDate: string
  profilePicture: string
  roles: [
    {
      id: number
      name: string
      authority: string
    },
  ]
  authorities: [
    {
      id: number
      name: string
      authority: string
    },
  ]
}

export default AuthService
