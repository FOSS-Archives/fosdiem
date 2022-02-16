initSidebarItems({"struct":[["TimeoutSigningRepr","Validators sign this structure that allows the TwoChainTimeoutCertificate to store a round number instead of a quorum cert per validator in the signatures field."],["TimeoutSigningReprHasher","Cryptographic hasher for an BCS-serializable #item"],["TwoChainTimeout","This structure contains all the information necessary to construct a signature on the equivalent of a DiemBFT v4 timeout message."],["TwoChainTimeoutCertificate","TimeoutCertificate is a proof that 2f+1 participants in epoch i have voted in round r and we can now move to round r+1. DiemBFT v4 requires signature to sign on the TimeoutSigningRepr and carry the TimeoutWithHighestQC with highest quorum cert among 2f+1."]]});