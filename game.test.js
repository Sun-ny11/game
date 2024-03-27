const { Game } = require("./game.js")

describe("game test", () => {
   it("first test", () => {
      const game = new Game()

      game.settings = {
         gritSize: {
            columns: 4,
            rows: 5
         }
      }

      expect(game.settings.gritSize.columns).toBe(4)
      expect(game.settings.gritSize.rows).toBe(5)
   })
   it("start game", async () => {
      const game = new Game()
      game.settings = {
         gritSize: {
            columns: 1,
            rows: 3
         }
      }
      expect(game.status).toBe("pending")

      await game.start()

      expect(game.status).toBe("in-process")

   })
   it("check start players position", async () => {
      const game = new Game()
      game.settings = {
         gritSize: {
            columns: 1,
            rows: 3
         }
      }
      await game.start()

      expect([1]).toContain(game.player1.position.x)
      expect([1, 2, 3]).toContain(game.player1.position.y)

      expect([1]).toContain(game.player2.position.x)
      expect([1, 2, 3]).toContain(game.player2.position.y)

      expect([1]).toContain(game.google.position.x)
      expect([1, 2, 3]).toContain(game.google.position.y)

      expect(
         (game.player1.position.x !== game.player2.position.x ||
            game.player1.position.y !== game.player2.position.y) &&
         (game.player1.position.x !== game.google.position.x ||
            game.player1.position.y !== game.google.position.y) &&
         (game.player2.position.x !== game.google.position.x ||
            game.player2.position.y !== game.google.position.y)
      ).toBe(true)

      expect(game.status).toBe("in-process")

   })
})