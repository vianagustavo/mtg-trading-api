-- CreateIndex
CREATE INDEX "cards_ownerId_idx" ON "cards" USING HASH ("ownerId");
