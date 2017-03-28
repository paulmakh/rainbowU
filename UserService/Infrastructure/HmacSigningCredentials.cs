namespace UserService.Infrastructure
{
    internal class HmacSigningCredentials
    {
        private byte[] keyByteArray;

        public HmacSigningCredentials(byte[] keyByteArray)
        {
            this.keyByteArray = keyByteArray;
        }
    }
}