for i in range(2, 21):
    with open(f"tables/multiplication_{i}", "w") as f:
        for a in range(1, 11):
            f.write(f"{i}x{a}={i * a}")
            if a != 10:
                f.write("\n")

   